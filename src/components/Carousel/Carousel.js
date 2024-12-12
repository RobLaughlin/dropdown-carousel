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

export function createCarousel(images) {
    let currentImage = 0;

    function render() {
        return string2node(/* html */`
            <div class="carouselContainer">
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
    };
    
    function next() {
        currentImage = (currentImage + 1) % images.length;
    }

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