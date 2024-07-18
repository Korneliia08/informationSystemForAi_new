let navOfAllCategories = document.querySelector(".navOfAllCategories");

let whiteArrowCategories = document.querySelector(".whiteArrowCategories");

let displayAllCategories = false;

whiteArrowCategories.addEventListener("click", () => {
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
