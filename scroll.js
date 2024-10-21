let scrollCount = 0; // Licznik przewinięć
let isScrolling = false; // Blokada podczas przewijania

// Na początku upewniamy się, że strona startuje z góry
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

window.addEventListener(
  "wheel",
  function (e) {
    if (isScrolling) {
      e.preventDefault(); // Jeżeli strona już się przewija, nie wykonujemy kolejnej akcji
      return;
    }

    const scrollPositions = [0, window.innerHeight, window.innerHeight * 2]; // Pozycje 0, 100vh, 200vh
    console.log(scrollCount);
    // Przewijanie w dół
    if (e.deltaY > 0 && scrollCount < 2) {
      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w dół
      isScrolling = true; // Blokujemy przewijanie

      scrollCount++; // Zwiększamy licznik przewinięć
      window.scrollTo({
        top: scrollPositions[scrollCount], // Przewiń do 0, 100vh, 200vh
        behavior: "smooth", // Płynne przewijanie
      });

      // Zdejmujemy blokadę po przewinięciu
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Opóźnienie 1 sekunda
    }

    // Przewijanie w górę
    if (e.deltaY < 0 && scrollCount > 0) {
      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w górę
      isScrolling = true; // Blokujemy przewijanie

      scrollCount--; // Zmniejszamy licznik przewinięć
      window.scrollTo({
        top: scrollPositions[scrollCount], // Przewiń do 0, 100vh, 200vh
        behavior: "smooth", // Płynne przewijanie w górę
      });

      // Zdejmujemy blokadę po przewinięciu
      setTimeout(() => {
        isScrolling = false;
      }, 200); // Opóźnienie 1 sekunda
    }

    // Na trzeciej sekcji przewijanie działa normalnie
  },
  { passive: false },
);
