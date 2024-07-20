let iconOfChat = document.querySelector(".iconOfChat");
let windowOfChat = document.querySelector(".windowOfChat");
let spanClose = document.querySelector(".spanClose");

let searchInputChat = document.querySelector(".searchInputChat");
let btnSend = document.querySelector(".btnSend");
let questionInInputFieldFromClient = document.querySelector(
  ".questionInInputFieldFromClient",
);
let answer = "";
iconOfChat.addEventListener("click", () => {
  windowOfChat.style.display = "flex";
  document.querySelector("body").style.overflowY = "hidden";
});

spanClose.addEventListener("click", () => {
  document.querySelector("body").style.overflowY = "initial";
  windowOfChat.style.display = "none";
});

searchInputChat.addEventListener("input", (event) => {
  questionInInputFieldFromClient = event.target.value;
  if (questionInInputFieldFromClient.length !== 0) {
    btnSend.classList.add("isActive");
  } else {
    btnSend.classList.remove("isActive");
  }
});

btnSend.addEventListener("click", checkQuestionFromClient);
btnSend.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkQuestionFromClient();
  }
});
let isAnswer = false;

function checkQuestionFromClient() {
  isAnswer = false;
  if (questionInInputFieldFromClient.length !== 0) {
    questions.forEach((obj) => {
      if (
        areStringsSimilar(obj.question, questionInInputFieldFromClient, 0.75)
      ) {
        isAnswer = true;
        answer = obj.answer;
      }
    });
  } else {
    btnSend.disabled = "false";
  }
  showQuestionInChat();
}

let popUpNoAnswer = document.querySelector(".popUpNoAnswer");

function showWindowIfNoAnswer() {
  if (!isAnswer) {
    setTimeout(() => {
      popUpNoAnswer.style.display = "flex";
      btnSend.disabled = "";
    }, 2500);
  } else {
    btnSend.disabled = "";
  }
}

let GPTpopupX = document.querySelector("#GPTpopupX");
GPTpopupX.addEventListener("click", () => {
  popUpNoAnswer.style.display = "none";
});

let blockForContentAndImage = document.querySelector(
  ".blockForContentAndImage",
);
let blockForCommunication = document.querySelector(".blockForCommunication");
let chat = document.querySelector(".chat");

function showQuestionInChat() {
  blockForContentAndImage.style.display = "none";
  blockForCommunication.style.display = "flex";
  const id = "message_" + new Date().getTime();
  chat.innerHTML += `<div class="client">
                       <span id="${id}">${questionInInputFieldFromClient}</span>

                    </div>`;
  //write(id, questionInInputFieldFromClient);
  searchInputChat.value = "";
  btnSend.disabled = "disabled";
  btnSend.classList.remove("isActive");
  if (answer.length > 0)
    setTimeout(
      () => {
        const id = "message_" + new Date().getTime();
        chat.innerHTML += `<div class="bot">
                        <img src="./../assets/images/robot2.png">
                       <span id="${id}"></span>
                    </div>`;
        write(id, answer);
        answer = "";
      },
      Math.round(Math.random() * 2000 + 1200),
    );
  showWindowIfNoAnswer();
}
