document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

const themeToggleButton = document.querySelector(".color"); // Adjust this selector to your theme toggle button
let aiChangeColor = document.querySelector("#aiChangeColor");
aiChangeColor.addEventListener("click", () => {
  aiChangeColor.classList.toggle("is-active");

  document.body.classList.toggle("dark-theme");
});
