let isScrolling = false; // Flaga informująca, czy przewijanie jest w toku
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

// Funkcja zaokrąglająca `scrollY` do najbliższego pełnego `100vh`
function roundToFullHeight(scrollY) {
  return Math.round(scrollY / window.innerHeight) * window.innerHeight;
}

// Obsługa zdarzenia scrolla
window.addEventListener(
  "wheel",
  function (e) {
    // Sprawdzamy, czy przewijanie jest już w toku
    if (isScrolling) {
      e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu, gdy przewijanie jest w toku
      return;
    }

    // Sprawdzamy, czy ekran jest poniżej 300vh
    let currentScroll = window.scrollY; // Zaokrąglona aktualna pozycja przewinięcia
    if (e.deltaY > 0) {
      if (currentScroll >= window.innerHeight * 2) {
        // Jeśli jesteśmy poniżej 300vh, scroll działa normalnie
        return;
      }
    } else {
      if (currentScroll > window.innerHeight * 2) {
        // Jeśli jesteśmy poniżej 300vh, scroll działa normalnie
        return;
      }
    }

    // Jeśli ekran jest powyżej 300vh, przewijamy o 100vh na raz
    e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
    isScrolling = true; // Blokujemy dalsze przewijanie
    currentScroll = roundToFullHeight(currentScroll);

    const targetScroll =
      e.deltaY > 0
        ? currentScroll + window.innerHeight // Przewijanie w dół o 100vh
        : currentScroll - window.innerHeight; // Przewijanie w górę o 100vh
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    // Ustalanie opóźnienia w ms
    setTimeout(() => {
      isScrolling = false; // Odblokowujemy przewijanie po zakończeniu animacji
    }, 700);
  },
  { passive: false },
);
