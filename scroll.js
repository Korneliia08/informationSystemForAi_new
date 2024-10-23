$(document).ready(function () {
  console.log(123);
  $("#pagepiling").pagepiling({
    scrollingSpeed: 200,
    easing: "linear",
  });
});
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
//     // Sprawdzamy kierunek przewijania
//     if (isScrolling) {
//       e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu, gdy przewijanie jest w toku
//       return;
//     }
//
//     if (e.deltaY > 0) {
//       // Przewijanie w dół
//       if (currentScroll < scrollPositions[2]) {
//         // Przewijanie tylko do 200vh
//         e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
//
//         isScrolling = true; // Blokujemy dalsze przewijanie
//         let targetScroll =
//           currentScroll < scrollPositions[1]
//             ? scrollPositions[1]
//             : scrollPositions[2];
//
//         window.scrollTo({
//           top: targetScroll,
//           behavior: "smooth",
//         });
//
//         setTimeout(() => {
//           isScrolling = false; // Odblokowujemy przewijanie po zakończeniu animacji
//         }, 1000); // Ustalanie opóźnienia w ms
//       }
//     } else if (e.deltaY < 0) {
//       // Przewijanie w górę
//       if (currentScroll > 0) {
//         // Normalne przewijanie gdy jesteśmy nad 0
//         e.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
//
//         isScrolling = true; // Blokujemy dalsze przewijanie
//         let targetScroll;
//
//         if (currentScroll > scrollPositions[1]) {
//           targetScroll = scrollPositions[1]; // Przewiń z 200vh do 100vh
//         } else if (currentScroll > scrollPositions[0] + 10) {
//           targetScroll = scrollPositions[0]; // Przewiń z 100vh do 0vh
//         }
//
//         if (targetScroll !== undefined) {
//           window.scrollTo({
//             top: targetScroll,
//             behavior: "smooth",
//           });
//
//           setTimeout(() => {
//             isScrolling = false; // Odblokowujemy przewijanie po zakończeniu animacji
//           }, 1000); // Ustalanie opóźnienia w ms
//         }
//       }
//     }
//   },
//   { passive: false },
// );
