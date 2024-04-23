import "./reset.css";
import "./style.css";
import { populateHome } from "./home.js";
import { populateOurStory } from "./ourStory.js";
import { populateMenu } from "./menu.js";
import { populateContactUs } from "./contactUs.js";

const navButtonOurStory = document.querySelector("#nav-button-our-story");
navButtonOurStory.addEventListener("click", populateOurStory);

const navButtonMenu = document.querySelector("#nav-button-menu");
navButtonMenu.addEventListener("click", populateMenu);

const navButtonContactUs = document.querySelector("#nav-button-contact-us");
navButtonContactUs.addEventListener("click", populateContactUs);

populateHome();
