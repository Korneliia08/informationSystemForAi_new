let iconOfChat = document.querySelector(".iconOfChat");
let windowOfChat = document.querySelector(".windowOfChat");
let spanClose = document.querySelector(".spanClose");

let searchInputChat = document.querySelector(".searchInputChat");

iconOfChat.addEventListener(
  "click",
  () => (windowOfChat.style.display = "block"),
);

spanClose.addEventListener(
  "click",
  () => (windowOfChat.style.display = "none"),
);
searchInputChat.addEventListener("input", () => alert("s"));
