import menuItem1 from "./deborah-rainford-zOlZgELBMRg-unsplash.jpg";
import menuItem2 from "./gentilesco-karolina-ferretis--_3OqGuSEfk-unsplash.jpg";
import menuItem3 from "./mary-west-1j8h-qIlbAw-unsplash.jpg";
import menuItem4 from "./max-griss-Spp1G283dow-unsplash.jpg";
import menuItem5 from "./the-nix-company-61wG5-SAF_Y-unsplash.jpg";

const menuItems = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5];

export function populateMenu() {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("tab-selected");
  });
  const navButtonMenu = document.querySelector("#nav-button-menu");
  navButtonMenu.classList.add("tab-selected");

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  contentDiv.appendChild(menuContainer);

  const menuGrid = document.createElement("div");
  menuGrid.id = "menu-grid";
  menuContainer.appendChild(menuGrid);

  [...Array(10)].forEach((_, index) => {
    const menuItemIndex = index % menuItems.length;
    const menuItemDiv = document.createElement("div");
    menuItemDiv.id = "menu-item";
    const descriptions = [
      "A must have!",
      "A delectable dish!",
      "Back by popular demand!",
      "Our most popular dish.",
      "Fresh and authentic Mexican cuisine.",
    ];
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];

    const myImage = new Image();
    myImage.src = menuItems[menuItemIndex];
    menuItemDiv.appendChild(myImage);

    const menuItemDescription = document.createElement("div");
    menuItemDescription.textContent = randomDescription;
    menuItemDiv.appendChild(menuItemDescription);
    menuGrid.appendChild(menuItemDiv);
  });
}
