export function rotateWords() {
  const colors = [
    "Aquamarine",
    "Chartreuse",
    "BlueViolet",
    "Coral",
    "LightPink",
    "Tomato",
    "Violet",
    "PaleGreen",
  ];

  const words = document.querySelectorAll(".word");
  words.forEach((word) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const letters = word.textContent.split("");
    word.textContent = "";
    word.style.color = randomColor;
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";

      word.append(span);
    });
  });

  let currentWordIndex = 0;
  const maxWordIndex = words.length - 1;
  console.log("here");
  console.log(maxWordIndex);
  words[currentWordIndex].style.opacity = "1"; // words have initial opacity:0

  function rotateWord() {
    const currentWord = words[currentWordIndex];
    const nextWord =
      currentWordIndex == maxWordIndex ? words[0] : words[currentWordIndex + 1];

    const nextLetterDelay = 80;
    const nextWordDelay = 340;

    // Rotate letters out of current word
    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * nextLetterDelay);
    });

    // Reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(
        () => {
          letter.className = "letter in";
        },
        nextWordDelay + i * nextLetterDelay,
      );
    });

    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  }
  rotateWord();
  setInterval(rotateWord, 3300);
}
