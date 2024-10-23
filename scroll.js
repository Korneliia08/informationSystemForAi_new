let isScrolling = false; // Blokada podczas przewijania

// Na początku upewniamy się, że strona startuje z góry
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

window.addEventListener(
  "wheel",
  function (e) {
    const scrollPositions = [0, window.innerHeight, window.innerHeight * 2]; // Pozycje 0, 100vh, 200vh
    let currentScroll = window.scrollY; // Aktualna pozycja przewinięcia
    let targetScroll; // Docelowa pozycja do przewinięcia

    // Przewijanie w dół
    if (e.deltaY > 0) {
      // Sprawdzamy, czy jesteśmy poniżej 200vh, wtedy przewijanie działa normalnie
      if (currentScroll >= scrollPositions[2]) {
        return; // Normalne przewijanie powyżej 200vh
      }

      if (isScrolling) {
        e.preventDefault(); // Jeżeli strona już się przewija, nie wykonujemy kolejnej akcji
        return;
      }

      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w dół
      isScrolling = true; // Blokujemy przewijanie

      // Sprawdzanie, na której sekcji jest użytkownik i ustawienie docelowej pozycji
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
        }, 100); // Krótsze opóźnienie
      }
    }

    // Przewijanie w górę
    if (e.deltaY < 0) {
      // Jeśli jesteśmy poniżej 200vh, pozwalamy na normalne przewijanie
      if (currentScroll > scrollPositions[2]) {
        return; // Normalne przewijanie poniżej 200vh
      }

      if (isScrolling) {
        e.preventDefault(); // Jeżeli strona już się przewija, nie wykonujemy kolejnej akcji
        return;
      }

      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu w górę

      // Sprawdzamy, na której sekcji jesteśmy
      if (currentScroll > scrollPositions[1] + 50) {
        targetScroll = scrollPositions[1]; // Przewiń z 200vh do 100vh, tolerancja 50px
      } else if (currentScroll > scrollPositions[0] + 150) {
        targetScroll = scrollPositions[0]; // Przewiń z 100vh do 0vh, tolerancja 50px
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
        }, 100); // Krótsze opóźnienie
      }
    }
  },
  { passive: false },
);
