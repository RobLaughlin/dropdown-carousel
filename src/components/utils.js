/**
 * Converts an HTML string to a node object
 * @param {string} str The HTML string
 * @returns The converted node object
 */
export const string2node = str => {
    let template = document.createElement("template");
    template.innerHTML = str;
    return template.content.firstElementChild;
};