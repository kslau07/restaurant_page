// import tacosFive from './tacos_five.jpg';

const populateHome = function () {
  const contentDiv = document.getElementById("content");
  const mainDiv = document.createElement("div");
  mainDiv.id = "main";
  contentDiv.appendChild(mainDiv);
  const footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  contentDiv.appendChild(footerDiv);
  // const tacos = new Image();
  // tacos.src = tacosFive;
  return contentDiv;
};

export { populateHome };
