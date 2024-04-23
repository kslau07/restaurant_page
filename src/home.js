import "./rotating-text.css";
import * as rotatingText from "./rotatingText.js";

const _rotatingTextDiv = () => {
  const div = document.createElement("div");
  div.classList.add("rotating-text");

  const p1 = document.createElement("p");
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
    span.innerHTML = adjective;
    p2.appendChild(span);
  });
  div.appendChild(p2);

  return div;
};

const _addressDiv = () => {
  const div = document.createElement("div");
  div.id = "address";
  div.innerHTML = `<p>Address</p><p>12300 Main St.</p><p>Anywhere, TX 98700</p>`;
  return div;
};

const _hoursDiv = () => {
  const div = document.createElement("div");
  div.id = "hours";
  div.innerHTML = `<p>Working hours</p>
    <p>Monday to Saturday 8:00 AM – 9:00 PM</p>
    <p>Sunday 9:00 AM – 9:00 PM</p>
    <p>It's Monday 8:48 PM — Closing in 12 minutes</p>`;
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
