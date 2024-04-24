export function populateOurStory() {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("tab-selected");
  });
  const navButtonOurStory = document.querySelector("#nav-button-our-story");
  navButtonOurStory.classList.add("tab-selected");

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const ourStoryContainer = document.createElement("div");
  ourStoryContainer.id = "our-story-container";
  contentDiv.appendChild(ourStoryContainer);

  const ourStoryGrid = document.createElement("div");
  ourStoryGrid.id = "our-story-grid";
  ourStoryContainer.appendChild(ourStoryGrid);

  const ourStoryFormContainer = document.createElement("div");
  ourStoryFormContainer.id = "our-story-form-container";
  ourStoryFormContainer.textContent = "hello from ourStory.js";
  ourStoryGrid.appendChild(ourStoryFormContainer);
}
