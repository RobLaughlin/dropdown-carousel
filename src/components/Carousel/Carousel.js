import { string2node } from "../utils";
import leftArrow from "../../icons/arrow-left.svg";
import rightArrow from "../../icons/arrow-right.svg";
import circle from "../../icons/circle.svg";

const CIRCLE_HTML = /* html */`<img src="${circle}" alt="circle icon" class="circleIcon"/>`;
const CIRCLE_SELECTED_HTML = /* html */`<img src="${circle}" alt="circle icon" class="circleIcon selected"/>`;

export class Image {
    src
    alt

    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
}
/**
 * Creates the carousel component
 * @param {Image[]} images A list of images to be put into the carousel 
 * @returns {Object} The carousel object
 */
export function createCarousel(images) {
    let currentImage = 0;

    /**
     * Render the carousel component inside of the root node
     * @param {Node} root The root node to inject the carousel component 
     */
    function render(root) {
        let carousel = string2node(/* html */`
            <div>
                <img src=${leftArrow} alt="left arrow" class="leftArrow arrow">
                <div class="carousel">
                    <img class="content" src="${images[currentImage]}", alt="Image ${currentImage+1} out of ${images.length}"/>
                    <div class="currentPicture">
                        ${Array.from(Array(images.length).keys()).map(i => {
                            return i === currentImage ? CIRCLE_SELECTED_HTML : CIRCLE_HTML;
                        })}
                    </div>
                </div>
                <img src=${rightArrow} alt="right arrow" class="rightArrow arrow">
            </div>
        `);
        
        root.innerHTML = carousel.innerHTML;
        root.querySelector(".leftArrow").addEventListener("click",  () => { previous(); render(root); } );
        root.querySelector(".rightArrow").addEventListener("click", () => { next(); render(root); });
    };

    /**
     * Selects the next image in the carousel
     */
    function next() {
        currentImage = (currentImage + 1) % images.length;
    }

    /**
     * Selects the previous image in the carousel
     */
    function previous() {
        currentImage = ((currentImage - 1) + images.length) % images.length;
    }

    let carousel = {
        render,
        next,
        previous
    };
    return carousel;
}