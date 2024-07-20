let currentSpeed = 100;
let lettersRemaining = 0;
const minSpeed = 3;
const maxSpeed = 50;

function setNewSpeed() {
  currentSpeed =
    Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;

  const minLetters = 3;
  const maxLetters = 37;
  lettersRemaining =
    Math.floor(Math.random() * (maxLetters - minLetters + 1)) + minLetters;
}

function makeMistake(letterCount, currentSpeed, id, text, index) {
  let element = document.getElementById(id);
  const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  element.innerHTML += randomChar;
  if (letterCount === 0) {
    setTimeout(() => {
      correctMistake(5, currentSpeed, id, text, index);
    }, currentSpeed * 5);
  } else {
    setTimeout(
      () => makeMistake(letterCount - 1, currentSpeed, id, text, index),
      currentSpeed,
    );
  }
}

function correctMistake(letterCount, currentSpeed, id, text, index) {
  let element = document.getElementById(id);
  if (letterCount >= 0) {
    element.innerHTML = element.innerHTML.slice(0, -1);
    setTimeout(
      () => correctMistake(letterCount - 1, currentSpeed, id, text, index),
      100,
    );
  } else {
    setNewSpeed();
    type(id, text, index);
  }
}

function type(id, text, index) {
  let element = document.getElementById(id);
  let blockForCommunication = document.querySelector(".blockForCommunication");
  blockForCommunication.scrollTo(0, blockForCommunication.scrollHeight);
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    lettersRemaining--;
    if (lettersRemaining <= 0) {
      setNewSpeed();
    }
    if (Math.random() < 0.005) {
      setTimeout(
        () => makeMistake(5, currentSpeed / 5, id, text, index),
        currentSpeed / 3,
      );
    } else {
      setTimeout(() => type(id, text, index), currentSpeed);
    }
  }
}

function write(id, text) {
  let index = 0;
  setNewSpeed();
  type(id, text, index);
}

setNewSpeed();

function areStringsSimilar(str1, str2, threshold) {
  function levenshteinDistance(a, b) {
    const matrix = Array.from(Array(a.length + 1), () =>
      Array(b.length + 1).fill(0),
    );

    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }

    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost,
        );
      }
    }

    return matrix[a.length][b.length];
  }

  const distance = levenshteinDistance(str1, str2);
  const similarity = 1 - distance / Math.max(str1.length, str2.length);

  return similarity >= threshold;
}
