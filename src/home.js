import "./rotating-text.css";
import * as rotatingText from "./rotatingText.js";
import tacoImage from "./chad-montano-lP5MCM6nZ5A-unsplash.jpg";

const _rotatingTextDiv = () => {
  const div = document.createElement("div");
  div.classList.add("rotating-text");

  const p1 = document.createElement("p");
  p1.style.gridArea = "phrase";
  p1.className = "phrase";
  p1.innerHTML = `Tacos are&nbsp;`;
  div.appendChild(p1);

  const p2 = document.createElement("p");
  const adjectives = [
    "awesome.",
    "scrumptious.",
    "zesty.",
    "fiery.",
    "savory.",
    "hearty.",
    "nourishing.",
    "the&nbsp;best.",
    "life.",
  ];
  adjectives.forEach((adjective) => {
    const span = document.createElement("span");
    span.className = "word";
    span.gridArea = "adjective";
    span.innerHTML = adjective;

    p2.appendChild(span);
  });
  div.appendChild(p2);

  return div;
};

const _tacoCircleImageDiv = () => {
  const tacoImageCropper = document.createElement("div");
  tacoImageCropper.className = "taco-image-cropper";

  const tacoImageDiv = document.createElement("div");
  tacoImageDiv.className = "taco-image";
  const myImage = new Image();
  myImage.src = tacoImage;
  tacoImageDiv.appendChild(myImage);

  tacoImageCropper.appendChild(tacoImageDiv);
  return tacoImageCropper;
};

const _addressDiv = () => {
  const div = document.createElement("div");
  div.id = "address";

  const line1 = document.createElement("p");
  line1.innerHTML = `📍 Our Address`;
  div.appendChild(line1);

  const line2 = document.createElement("p");
  line2.innerHTML = `12300 Main St.`;
  div.appendChild(line2);

  const line3 = document.createElement("p");
  line3.innerHTML = `Anywhere, TX 987000`;
  div.appendChild(line3);

  return div;
};

function openOrClosedMessage() {
  const now = new Date();
  const nowDay = now.getDay();
  const nowHour = now.getHours();
  const nowMinutes = now.getMinutes();
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  const thisDay = days[nowDay];
  const currTime = `${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  const hoursLeft = 21 - nowHour - 1;
  const minsLeft = 60 - nowMinutes;
  const hourPlural = hoursLeft === 1 ? "hour" : "hours";
  const minutePlural = minsLeft === 1 ? "minute" : "minutes";
  let message = `It's ${thisDay} ${currTime} - `;
  if (nowHour >= 21) {
    message += "We are now closed.";
  } else {
    message += `Closing in ${hoursLeft} ${hourPlural} and ${minsLeft} ${minutePlural}.`;
  }

  return message;
}

const _hoursDiv = () => {
  const div = document.createElement("div");
  div.id = "hours";

  const line1 = document.createElement("p");
  line1.innerHTML = `🕒 Our Hours`;
  div.appendChild(line1);

  const line2 = document.createElement("p");
  line2.innerHTML = `Monday to Saturday 10:00 AM – 9:00 PM`;
  div.appendChild(line2);

  const line3 = document.createElement("p");
  line3.innerHTML = `Sunday 11:00 AM – 9:00 PM`;
  div.appendChild(line3);

  const line4 = document.createElement("p");
  line4.innerHTML = openOrClosedMessage();
  div.appendChild(line4);

  return div;
};

export function populateHome() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const main = document.createElement("main");
  main.id = "main";

  const bannerDiv = document.createElement("div");
  bannerDiv.id = "banner";
  main.appendChild(bannerDiv);

  const rotatingTextDiv = _rotatingTextDiv();
  bannerDiv.appendChild(rotatingTextDiv);

  const tacoCircleImageDiv = _tacoCircleImageDiv();
  bannerDiv.appendChild(tacoCircleImageDiv);

  const footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  main.appendChild(footerDiv);

  const addressDiv = _addressDiv();
  footerDiv.appendChild(addressDiv);

  const dottedLineDiv = document.createElement("div");
  dottedLineDiv.id = "dotted-line";
  footerDiv.appendChild(dottedLineDiv);

  const hoursDiv = _hoursDiv();
  footerDiv.appendChild(hoursDiv);

  contentDiv.appendChild(main);
  rotatingText.rotateWords();
}
