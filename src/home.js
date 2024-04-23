export function populateHome() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const main = document.createElement("main");
  main.id = "main";

  const bannerDiv = document.createElement("div");
  bannerDiv.id = "banner";
  bannerDiv.textContent = "Tacos are ____";
  main.appendChild(bannerDiv);

  const footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  main.appendChild(footerDiv);

  const addressDiv = document.createElement("div");
  addressDiv.id = "address";
  addressDiv.innerHTML = `<p>Address</p><p>12300 Main St.</p><p>Anywhere, TX 98700</p>`;
  footerDiv.appendChild(addressDiv);

  const dottedLineDiv = document.createElement("div");
  dottedLineDiv.id = "dotted-line";
  footerDiv.appendChild(dottedLineDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hours";
  hoursDiv.innerHTML = `<p>Working hours</p>
    <p>Monday to Saturday 8:00 AM – 9:00 PM</p>
    <p>Sunday 9:00 AM – 9:00 PM</p>
    <p>It's Monday 8:48 PM — Closing in 12 minutes</p>`;
  footerDiv.appendChild(hoursDiv);

  contentDiv.appendChild(main);
}
