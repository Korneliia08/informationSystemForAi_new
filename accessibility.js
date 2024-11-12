// accessibility.js
$(document).ready(function () {
  let open = false;
  let isUnderlined = false;
  let fontSize = 16;
  let showLine = false;
  let grayscale = false;
  let invertColors = false;
  let lineHeight = 1;
  let lowSaturation = false;
  let highSaturation = false;

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function toggleUnderline() {
    isUnderlined = !isUnderlined;
    underlineLinks();
  }

  function underlineLinks() {
    $("a").css("text-decoration", isUnderlined ? "underline" : "none");
  }

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        underlineLinks();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  function increaseFontSize() {
    if (fontSize < 30) {
      fontSize = Math.min(fontSize + 2, 30);
      $("html").css("font-size", `${fontSize}px`);
    }
  }

  function decreaseFontSize() {
    if (fontSize > 12) {
      fontSize = Math.max(fontSize - 2, 12);
      $("html").css("font-size", `${fontSize}px`);
    }
  }

  function resetOptions() {
    isUnderlined = false;
    fontSize = 16;
    showLine = false;
    grayscale = false;
    invertColors = false;
    lowSaturation = false;
    highSaturation = false;
    lineHeight = 1;

    $("*").css("text-decoration", "none");
    $("html").css({ filter: "none", fontSize: "16px", lineHeight: "1" });
  }

  function toggleGrayscale() {
    grayscale = !grayscale;
    $("html").css("filter", grayscale ? "grayscale(100%)" : "none");
  }

  function toggleInvertColors() {
    invertColors = !invertColors;
    $("html").css("filter", invertColors ? "invert(100%)" : "none");
  }

  function toggleLowSaturation() {
    lowSaturation = !lowSaturation;
    $("html").css("filter", lowSaturation ? "saturate(20%)" : "none");
  }

  function toggleHighSaturation() {
    highSaturation = !highSaturation;
    $("html").css("filter", highSaturation ? "saturate(200%)" : "none");
  }

  function increaseLineHeight() {
    lineHeight = Math.min(lineHeight + 0.1, 2);
    $("html").css("line-height", lineHeight);
  }

  function decreaseLineHeight() {
    lineHeight = Math.max(lineHeight - 0.1, 0.5);
    $("html").css("line-height", lineHeight);
  }

  $("#accessibility-icon").click(function () {
    open = !open;
    $(".accessibility-container").toggleClass("open", open);
  });

  $(".accessibility-block").on("click", stopPropagation);

  $("#increase-font").click(increaseFontSize);
  $("#decrease-font").click(decreaseFontSize);
  $("#toggle-underline").click(toggleUnderline);
  $("#toggle-grayscale").click(toggleGrayscale);
  $("#toggle-invert").click(toggleInvertColors);
  $("#toggle-low-saturation").click(toggleLowSaturation);
  $("#toggle-high-saturation").click(toggleHighSaturation);
  $("#increase-line-height").click(increaseLineHeight);
  $("#decrease-line-height").click(decreaseLineHeight);
  $("#reset-options").click(resetOptions);

  $(document).click(function (e) {
    if (
      !$(e.target).closest("#accessibility-icon").length &&
      !$(e.target).closest(".accessibility-container").length
    ) {
      open = false;
      $(".accessibility-container").removeClass("open");
    }
  });
});
