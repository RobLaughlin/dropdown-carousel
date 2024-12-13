import {createDropdownMenu, MenuItem} from "../components/DropdownMenu/DropdownMenu";
import { createCarousel } from "../components/Carousel/Carousel";
import placeholder1 from "../images/400x200.gif";
import placeholder2 from "../images/800x200.gif";
import placeholder3 from "../images/800x800.gif";

import "../css/index.css";
import "../components/Carousel/Carousel.css";

const DATA = {
  MENU_ITEMS: [
    new MenuItem("Menu Item 1", ""), 
    new MenuItem("Menu Item 2", "")
  ],
  IMAGES: [
    `${placeholder1}`, 
    `${placeholder2}`,
    `${placeholder3}`
  ],
  SLIDE_INTERVAL_MS: 5000
};

// Inject dropdown menu into navbar
let navbar = document.getElementsByClassName("navbar")[0];
const dropdown = createDropdownMenu(DATA.MENU_ITEMS);
navbar.appendChild(dropdown);

let carouselContainer = document.querySelector(".carouselContainer");
let carousel = createCarousel(DATA.IMAGES);

carousel.render(carouselContainer);
setInterval(() => {
    carousel.next();
    carousel.render(carouselContainer);
}, DATA.SLIDE_INTERVAL_MS);


