import Letter from "./letter-opened-svgrepo-com.svg";

export function populateContactUs() {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach((button) => {
    button.classList.remove("tab-selected");
  });
  const navButtonContactUs = document.querySelector("#nav-button-contact-us");
  navButtonContactUs.classList.add("tab-selected");

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const contactUsContainer = document.createElement("div");
  contactUsContainer.id = "contact-us-container";
  contentDiv.appendChild(contactUsContainer);

  const contactUsGrid = document.createElement("div");
  contactUsGrid.id = "contact-us-grid";
  contactUsContainer.appendChild(contactUsGrid);

  const contactUsImage = document.createElement("div");
  contactUsImage.id = "contact-us-image";
  const letter = new Image();
  letter.src = Letter;
  contactUsImage.appendChild(letter);
  contactUsGrid.appendChild(contactUsImage);

  const contactUsForm = document.createElement("div");
  contactUsForm.id = "contact-us-form";

  contactUsGrid.appendChild(contactUsForm);

  const fieldNames = ["name", "phone"];
  fieldNames.forEach((fieldName) => {
    const label = document.createElement("label");
    label.textContent = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    label.htmlFor = fieldName + "-input";
    const input = document.createElement("input");
    input.type = "text";
    input.name = fieldName;
    input.id = fieldName + "-input";

    contactUsForm.appendChild(label);
    label.appendChild(input);
  });

  const commentLabel = document.createElement("label");
  commentLabel.textContent = "Comment";
  commentLabel.htmlFor = "comment-textarea";
  const commentInput = document.createElement("textarea");
  commentInput.rows = "4";
  commentInput.cols = "50";
  commentInput.id = "comment-textarea";
  commentLabel.appendChild(commentInput);
  contactUsForm.appendChild(commentLabel);
}
