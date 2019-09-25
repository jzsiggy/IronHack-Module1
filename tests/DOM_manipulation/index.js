// let paragraph = document.querySelector("p");
// paragraph.innerText = "Salve!";

// let h1 = document.querySelector("h1");
// // h1.innerText = "Titulo";
// h1.setAttribute('class', 'blue');

// let remAttribute = () => {
//     h1.removeAttribute('class');
//     // h1.style.marginTop = '10px';
// };

// let p = document.createElement("p");

// p.innerText = "DOM Element";

// let body = document.getElementsByTagName("body");

// body[0].appendChild(p);


let createDomElement = (name, text) => {
    let element = document.createElement(name);
    if (text) {
        element.innerText = text;
    };
    return element;
}


let html = document.querySelector("html");

let body = document.querySelector("body");

body.appendChild(createDomElement('header', ""));
body.appendChild(createDomElement('section', ""));
body.appendChild(createDomElement('section', ""));
body.appendChild(createDomElement('footer', ""));

let header = document.querySelector("header");

header.appendChild(createDomElement('picture', ""));
header.appendChild(createDomElement('nav', ""));

let nav = document.querySelector("nav");

nav.appendChild(createDomElement("ul", ""));

let ul = document.querySelector("ul");

ul.appendChild(createDomElement("li", "item 1"))
ul.appendChild(createDomElement("li", "item 2"))
ul.appendChild(createDomElement("li", "item 3"))

let sections = document.querySelectorAll("section");

sections[0].appendChild(createDomElement("h1", ""));
sections[1].appendChild(createDomElement("div", ""));
sections[1].appendChild(createDomElement("div", ""));
sections[1].appendChild(createDomElement("div", ""));

let footer = document.querySelector("footer");

footer.appendChild(createDomElement("p", ""));