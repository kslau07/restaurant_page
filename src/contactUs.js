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

  const h2 = document.createElement("h2");
  h2.id = "contact-us-header";
  h2.textContent = "Leave us a comment!";
  contactUsForm.appendChild(h2);

  // Fields for name, email, and comment

  const nameFieldGroup = document.createElement("div");
  nameFieldGroup.classList.add("contact-us-field-group");
  const nameInput = document.createElement("input");
  nameInput.placeholder = "name";
  nameInput.classList.add("contact-us-input");
  nameInput.type = "text";
  nameFieldGroup.appendChild(nameInput);
  const nameLabel = document.createElement("label");
  nameLabel.classList.add("contact-us-label");
  nameLabel.textContent = "Name";
  nameFieldGroup.appendChild(nameLabel);
  contactUsForm.appendChild(nameFieldGroup);

  const emailFieldGroup = document.createElement("div");
  emailFieldGroup.classList.add("contact-us-field-group");
  const emailInput = document.createElement("input");
  emailInput.classList.add("contact-us-input");
  emailInput.placeholder = "email";
  emailInput.type = "email";
  emailFieldGroup.appendChild(emailInput);
  const emailLabel = document.createElement("label");
  emailLabel.classList.add("contact-us-label");
  emailLabel.textContent = "Email";
  emailFieldGroup.appendChild(emailLabel);
  contactUsForm.appendChild(emailFieldGroup);

  const commentFieldGroup = document.createElement("div");
  commentFieldGroup.classList.add("contact-us-field-group");
  const commentInput = document.createElement("textarea");
  commentInput.rows = "4";
  commentInput.classList.add("contact-us-input");
  commentInput.placeholder = "comment";
  commentFieldGroup.appendChild(commentInput);
  const commentLabel = document.createElement("label");
  commentLabel.classList.add("contact-us-label");
  commentLabel.textContent = "Comment";
  commentFieldGroup.appendChild(commentLabel);
  contactUsForm.appendChild(commentFieldGroup);

  const contactUsButton = document.createElement("button");
  contactUsButton.id = "contact-us-button";
  contactUsButton.textContent = "Submit";
  contactUsForm.appendChild(contactUsButton);
}
