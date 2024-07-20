let iconOfChat = document.querySelector(".iconOfChat");
let windowOfChat = document.querySelector(".windowOfChat");
let spanClose = document.querySelector(".spanClose");

iconOfChat.addEventListener(
  "click",
  () => (windowOfChat.style.display = "block"),
);

spanClose.addEventListener(
  "click",
  () => (windowOfChat.style.display = "none"),
);
