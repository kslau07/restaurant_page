import "./reset.css";
import "./style.css";
import { populateHome } from "./home.js";
import { populateMenu } from "./menu.js";
import { populateContactUs } from "./contactUs.js";
import { populateOurStory } from "./ourStory.js";

const logo = document.querySelector("#logo-container");
logo.addEventListener("click", populateHome);

const navButtonMenu = document.querySelector("#nav-button-menu");
navButtonMenu.addEventListener("click", populateMenu);

const navButtonContactUs = document.querySelector("#nav-button-contact-us");
navButtonContactUs.addEventListener("click", populateContactUs);

const navButtonOurStory = document.querySelector("#nav-button-our-story");
navButtonOurStory.addEventListener("click", populateOurStory);

// populateHome(); // TODO: CHANGE ME BACK
populateContactUs();
