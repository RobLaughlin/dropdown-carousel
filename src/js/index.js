import {createDropdownMenu, MenuItem} from "../components/DropdownMenu/DropdownMenu";
import { createCarousel } from "../components/Carousel/Carousel";
import placeholder1 from "../images/1.gif";

import "../css/index.css";
import "../components/Carousel/Carousel.css";

const DATA = {
  MENU_ITEMS: [
    new MenuItem("Menu Item 1", ""), 
    new MenuItem("Menu Item 2", "")
  ],
  IMAGES: [
    `${placeholder1}`, 
    "img2"
  ]
};

// Inject dropdown menu into navbar
let navbar = document.getElementsByClassName("navbar")[0];
const dropdown = createDropdownMenu(DATA.MENU_ITEMS);
navbar.appendChild(dropdown);

let body = document.getElementsByTagName("body")[0];
const carousel = createCarousel(DATA.IMAGES);
body.appendChild(carousel.render());

