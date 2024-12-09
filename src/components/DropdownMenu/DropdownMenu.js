import "./DropdownMenu.css";
import verticalDots from "./dots-vertical.svg";
import { string2node } from "../utils";

export class MenuItem {
    text;
    link;

    /**
     * The menu item data structure to be placed inside of the dropdown menu
     * @param {string} text The text of the menu item 
     * @param {string} link The web link that the menu item references
     */
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
};

const createMenuItem = item => {
    return /* html */`
        <li>
            <a href=${item.link}>${item.text}</a>
        </li>
    `
};

// Open & Close the menu on click
const dropdownMenuClicked = e => {
    let dropdown = e.target.parentElement;
    let itemContainer = dropdown.querySelector(".itemContainer");
    itemContainer.classList.toggle("hidden");
    dropdown.classList.toggle("closed");
};

/**
 * Creates a dropdown menu component
 * @param {MenuItem[]} items An array of items to be put into an unordered list
 * @returns {Node} The dropdown component
 */
export function createDropdownMenu(items) {
    const dropdownMenu = string2node(/* html */`
        <div class="dropdown-menu closed">
            <img class="menu" src="${verticalDots}" alt="Dropdown menu icon">
            <div class="itemContainer hidden">
                <ul class="items">
                    ${items.map(createMenuItem).join(`<br />`)}
                </ul>
            </div>
        </div>
    `);

    let menu = dropdownMenu.querySelector(".menu");
    menu.addEventListener("click", dropdownMenuClicked);

    return dropdownMenu
}