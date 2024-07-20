let currentSpeed = 100;
let lettersRemaining = 0;
const minSpeed = 21;
const maxSpeed = 50;

function setNewSpeed() {
  currentSpeed =
    Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;

  const minLetters = 3;
  const maxLetters = 27;
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

  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    lettersRemaining--;
    if (lettersRemaining <= 0) {
      setNewSpeed();
    }
    if (Math.random() < 0.01) {
      setTimeout(
        () => makeMistake(5, currentSpeed, id, text, index),
        currentSpeed,
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
