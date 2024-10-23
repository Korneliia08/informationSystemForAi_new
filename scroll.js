// let isScrolling = false; // Flaga informująca, czy przewijanie jest w toku
// const scrollPositions = [0, window.innerHeight, window.innerHeight * 2]; // Pozycje: 0, 100vh, 200vh
//
// // Ustawiamy na początku stronę na górę
// window.scrollTo({
//   top: 0,
//   behavior: "smooth",
// });
//
// // Obsługa zdarzenia scrolla
// window.addEventListener(
//   "wheel",
//   function (e) {
//     const currentScroll = window.scrollY; // Aktualna pozycja przewinięcia
//
//     // Sprawdzamy, czy przewijanie jest już w toku
//     if (isScrolling) {
//       e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu, gdy przewijanie jest w toku
//       return;
//     }
//
//     let targetScroll;
//
//     if (e.deltaY > 0) {
//       // Przewijanie w dół
//       if (currentScroll < scrollPositions[2]) {
//         e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
//         isScrolling = true; // Blokujemy dalsze przewijanie
//         targetScroll =
//           currentScroll < scrollPositions[1]
//             ? scrollPositions[1]
//             : scrollPositions[2];
//
//         window.scrollTo({
//           top: targetScroll,
//           behavior: "smooth",
//         });
//       }
//     } else if (e.deltaY < 0) {
//       // Przewijanie w górę
//       e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
//       isScrolling = true; // Blokujemy dalsze przewijanie
//
//       if (currentScroll > scrollPositions[0]) {
//         if (currentScroll > scrollPositions[1]) {
//           targetScroll = scrollPositions[1]; // Przewiń z 200vh do 100vh
//         } else {
//           targetScroll = scrollPositions[0]; // Przewiń z 100vh do 0vh
//         }
//
//         window.scrollTo({
//           top: targetScroll,
//           behavior: "smooth",
//         });
//       }
//     }
//
//     // Ustalanie opóźnienia w ms
//     setTimeout(() => {
//       isScrolling = false; // Odblokowujemy przewijanie po zakończeniu animacji
//     }, 300);
//   },
//   { passive: false },
// );
