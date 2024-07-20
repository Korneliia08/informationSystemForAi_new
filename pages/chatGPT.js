let iconOfChat = document.querySelector(".iconOfChat");
let windowOfChat = document.querySelector(".windowOfChat");
let spanClose = document.querySelector(".spanClose");

let searchInputChat = document.querySelector(".searchInputChat");
let btnSend = document.querySelector(".btnSend");

let questionInInputFieldFromClient = "";

iconOfChat.addEventListener(
  "click",
  () => (windowOfChat.style.display = "block"),
);

spanClose.addEventListener(
  "click",
  () => (windowOfChat.style.display = "none"),
);

searchInputChat.addEventListener("input", (event) => {
  questionInInputFieldFromClient = event.target.value;
  if (questionInInputFieldFromClient.length !== 0) {
    btnSend.classList.add("isActive");
  } else {
    btnSend.classList.remove("isActive");
  }
});

btnSend.addEventListener("click", checkQuestionFromClient);

let isAnswer = false;

function checkQuestionFromClient() {
  questions.forEach((obj) => {
    if (obj.question === questionInInputFieldFromClient) {
      isAnswer = true;
    } else {
      isAnswer = false;
    }
  });
  showWindowIfNoAnswer();
}

function showWindowIfNoAnswer() {
  let popUpNoAnswer = document.querySelector(".popUpNoAnswer");
  if (!isAnswer) {
    setTimeout(() => {
      popUpNoAnswer.style.display = "flex";
    }, 2500);
  }
}
