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
    let currentScroll = window.scrollY; // Aktualna pozycja przewinięcia
    let targetScroll; // Docelowa pozycja do przewinięcia

    // Przewijanie w dół
    if (e.deltaY > 0) {
      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w dół
      isScrolling = true; // Blokujemy przewijanie

      // Sprawdzenie, gdzie znajduje się użytkownik i ustawienie docelowej pozycji przewinięcia
      if (currentScroll < scrollPositions[1]) {
        targetScroll = scrollPositions[1]; // Przewiń do 100vh
      } else if (currentScroll < scrollPositions[2]) {
        targetScroll = scrollPositions[2]; // Przewiń do 200vh
      }

      // Jeżeli ustalono docelową pozycję, przewijamy
      if (targetScroll !== undefined) {
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth", // Płynne przewijanie
        });

        // Zdejmujemy blokadę po przewinięciu
        setTimeout(() => {
          isScrolling = false;
        }, 1000); // Opóźnienie 1 sekunda
      }
    }

    // Przewijanie w górę
    if (e.deltaY < 0) {
      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w górę
      isScrolling = true; // Blokujemy przewijanie

      // Sprawdzenie, gdzie znajduje się użytkownik i ustawienie docelowej pozycji przewinięcia
      if (currentScroll >= scrollPositions[2]) {
        targetScroll = scrollPositions[1]; // Przewiń do 100vh
      } else if (currentScroll >= scrollPositions[1]) {
        targetScroll = scrollPositions[0]; // Przewiń do 0vh
      }

      // Jeżeli ustalono docelową pozycję, przewijamy
      if (targetScroll !== undefined) {
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth", // Płynne przewijanie w górę
        });

        // Zdejmujemy blokadę po przewinięciu
        setTimeout(() => {
          isScrolling = false;
        }, 100); // Opóźnienie 1 sekunda
      }
    }
  },
  { passive: false },
);
