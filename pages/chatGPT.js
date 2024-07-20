let iconOfChat = document.querySelector(".iconOfChat");
let windowOfChat = document.querySelector(".windowOfChat");
let spanClose = document.querySelector(".spanClose");

let searchInputChat = document.querySelector(".searchInputChat");

iconOfChat.addEventListener("click", () => {
  windowOfChat.style.display = "flex";
  document.querySelector("body").style.overflowY = "hidden";
});

spanClose.addEventListener("click", () => {
  document.querySelector("body").style.overflowY = "initial";
  windowOfChat.style.display = "none";
});
searchInputChat.addEventListener("input", () => alert("s"));
