export const string2node = str => {
    let template = document.createElement("template");
    template.innerHTML = str;
    return template.content;
};