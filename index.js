let navOfAllCategories = document.querySelector(".navOfAllCategories");

let whiteArrowCategories = document.querySelector(".whiteArrowCategories");
let categories_button = document.querySelector("#categories_button");
let displayAllCategories = false;

categories_button.addEventListener("click", () => {
  if (!displayAllCategories) {
    navOfAllCategories.style.display = "flex";
    whiteArrowCategories.style.transform = "rotate(180deg)";
    displayAllCategories = true;
  } else {
    navOfAllCategories.style.display = "none";
    displayAllCategories = false;
    whiteArrowCategories.style.transform = "rotate(360deg)";
  }
});

function closeSubMenu() {
  navOfAllCategories.style.display = "none";
  displayAllCategories = false;
  whiteArrowCategories.style.transform = "rotate(360deg)";
}

let navHamburger = document.querySelector("#navHamburger");
navHamburger.addEventListener("click", () => {
  if (navHamburger.classList.contains("is-active")) {
    document.querySelector("#mobileMenu").classList.remove("is-active");
  } else {
    document.querySelector("#mobileMenu").classList.add("is-active");
  }
  navHamburger.classList.toggle("is-active");
});
let history = [];

function setFromHistory(text) {
  console.log(text);
  searchInput.value = text;
  searchButton.click();
}

const refresh = () => {
  let his = document.querySelector("#searchHistory");
  his.innerHTML = history
    .reverse()
    .slice(0, 8)
    .map((k) => {
      return `<div class="element" onclick="setFromHistory('${k}')"><p>${k.slice(0, 40)}</p><span>X</span></div>`;
    })
    .join("");
  if (history.length > 15) {
    history = history.slice(0, -2);
  }
  history.reverse();
};
try {
  if (sessionStorage.key("history")) {
    history = sessionStorage.getItem("history").split(",");
  }
} catch (error) {}

refresh();
let searchHistory = document.querySelector("#searchHistory");
let searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("focus", () => {
  searchHistory.classList.add("active");
});
searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    searchHistory.classList.remove("active");
  }, 110);
});

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => {
  search();
});

function search() {
  if (history[history.length - 1] === searchInput.value) {
    searchInput.value = "";
  } else {
    history.push(searchInput.value);
    sessionStorage.setItem("history", history);
    searchInput.value = "";
  }
  refresh();
}
