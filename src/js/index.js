import {createDropdownMenu, MenuItem} from "../components/DropdownMenu/DropdownMenu";

import "../css/index.css";

const DATA = {
  MENU_ITEMS: [
    new MenuItem("Menu Item 1", ""), 
    new MenuItem("Menu Item 2", "")
  ],
};

// Inject dropdown menu into navbar
let navbar = document.getElementsByClassName("navbar")[0];
const dropdown = createDropdownMenu(DATA.MENU_ITEMS);
navbar.appendChild(dropdown);
