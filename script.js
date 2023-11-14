import {images} from "./data.js";

const container = document.getElementById("img-container");
const buttons = document.querySelectorAll(".button");

console.log(buttons);
buttons.forEach((element, index) => {
    if (index > 0) {
        element.addEventListener("click", function (e) {
            const val = element.innerText.toLowerCase();
            container.innerText = "";
            images[val].forEach(element => {
                const img = document.createElement("img");
                img.src = element;
                const div = document.createElement("div");
                div.append(img);
                container.append(div);
            });
        })
    } else {
        element.addEventListener("click", function(){
            appendAll();
        })
    }
})

document.addEventListener("DOMContentLoaded", appendAll);

function appendAll() {
    container.innerText = "";
    for (let i of Object.keys(images)) {
        console.log(i)
        images[i].forEach(element => {
            const img = document.createElement("img");
            img.src = element;
            const div = document.createElement("div");
            div.append(img);
            container.append(div);
        });
    }
}