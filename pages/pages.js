let mainForContent = document.querySelector("#mainForContent");
mainForContent.innerHTML = homePage();

function choosePage(page) {
  console.log(page);
  switch (page) {
    case "aiInMenagement":
      mainForContent.innerHTML = AiInManagement();
      break;
    case "home":
      mainForContent.innerHTML = homePage();
      break;
    case "firstPage":
      mainForContent.innerHTML = firstPage();
      break;
  }
}
