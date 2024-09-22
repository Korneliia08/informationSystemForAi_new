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
searchInputChat.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkQuestionFromClient();
  }
});
let isAnswer = false;

function checkQuestionFromClient() {  console.log(activeChat);
  if (questionInInputFieldFromClient.trim().length == 0) return;
  isAnswer = false;
  if (questionInInputFieldFromClient.length !== 0) {
 const button =document.querySelector(`[data-id="${activeChat}"]`);
    console.log(button);
    if(button.innerHTML.includes('Enter q')){
   button.innerHTML=
     ` <i class="fa-regular fa-comment-dots"></i><span>${questionInInputFieldFromClient.trim().slice(0,15)}</span>`


 }
    addToGptHistory(questionInInputFieldFromClient);
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
    const id = "message_" + new Date().getTime() + "bot";
    chat.innerHTML += `<div class="bot" id="${id}loading">
                        <img src="./../assets/images/robot2.png">
                       <span id="${id + "_"}" ></span>
                    </div>`;
    write(id + "_", "Loading.......", true);
    setTimeout(() => {
      popUpNoAnswer.style.display = "flex";
      btnSend.disabled = "";
      document.querySelector(`#${id}loading`).remove();
      chat.innerHTML += `<div class="bot" id="gptLoading">
                        <img src="./../assets/images/robot2.png">
                       <span id="${id}" ></span>
                    </div>`;
      write(id, "I don't have answer do you.", true);
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
  // blockForContentAndImage.style.display = "none";
  blockForContentAndImage.style.position = "absolute";
  // blockForContentAndImage.style.top = "30%";
  blockForContentAndImage.style.opacity = "0.15";
  blockForCommunication.style.display = "flex";
  const id = "message_" + new Date().getTime();
  chat.innerHTML += `<div class="client">
                       <span id="${id}">${questionInInputFieldFromClient}</span>
                    </div>`;
  searchInputChat.value = "";
  btnSend.disabled = "disabled";
  btnSend.classList.remove("isActive");
  if (answer.length > 0) {
    const idLoading = "message_" + new Date().getTime() + "bot";
    chat.innerHTML += `<div class="bot" id="${idLoading + "loading"}">
                          <img src="./../assets/images/robot2.png">
                         <span id="${idLoading}" ></span>
                      </div>`;
    write(idLoading, "Loading.......", true);
    setTimeout(
      () => {
        document.querySelector("#" + idLoading + "loading").remove();
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
  }
  showWindowIfNoAnswer();
}

let gptHistory = [];
try {
  gptHistory = sessionStorage.getItem("gptHistory").split(",");

  if (!gptHistory) gptHistory = [];
} catch (error) {}
//let gptSearchHistory = document.querySelector("#gptSearchHistory");
writeHistoryGpt();

function addToGptHistory(text) {
  gptHistory.push(text);

  sessionStorage.setItem("gptHistory", gptHistory);
  writeHistoryGpt();
}

function writeHistoryGpt() {
  // gptSearchHistory.innerHTML = "";
  gptHistory
    .slice(0, 10)
    .reverse()
    .forEach((k) => {
      if (k.replaceAll(" ", "").length > 0) {
        //    gptSearchHistory.innerHTML += `<div onclick="setFromHistory('${k}')" class="element">${k}</div>`;
      }
    });
}

function setFromHistory(text) {
  if (text) {
    console.log(document.querySelector(".searchInputChat"));
    document.querySelector(".searchInputChat").value = text;
    questionInInputFieldFromClient = text;
    btnSend.click();
  } else {
    console.error(text);
  }
}

document.querySelector('.clearConversation-js').addEventListener('click',()=>{
  chat.innerHTML=''

  const button =document.querySelector(`[data-id="${activeChat}"]`);
  button.remove()

})
let indexChat = 1;
let activeChat = 1
const chatContainer = document.querySelector('.chatContainer-js');
const chatDisplay = document.querySelector('.chat'); // Upewnij się, że masz element do wyświetlania czatu

chatContainer.innerHTML += `
  <div class="element chat-js" data-id="${indexChat}" data->
    <i class="fa-regular fa-comment-dots"></i><span>Enter question</span>
  </div>`;

let backUpChat = {};

document.querySelector('.newChat-js').addEventListener('click', () => {

  addChat()

});
function addChat(){
  indexChat++;
  chatContainer.innerHTML += `
  <div class="element chat-js" data-id="${indexChat}">
    <i class="fa-regular fa-comment-dots"></i><span>Enter question</span>
  </div>`;

}
chatContainer.addEventListener('click', (event) => {

  let chatElement = event.target;
  if (!chatElement.classList.contains('chat-js')) {
    chatElement = chatElement.closest('.chat-js');
  }

  if (chatElement) {
    const dataId = chatElement.dataset.id;

    // Zapisz obecny stan czatu do backUpChat
    backUpChat['k' + activeChat] = chatDisplay.innerHTML; // Użyj chatDisplay
    activeChat = dataId;

    // Ustaw nową zawartość czatu
    chatDisplay.innerHTML = backUpChat['k' + dataId] || ''; // Użyj chatDisplay
  }
});
