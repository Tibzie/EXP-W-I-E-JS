import { makeUpperCase, makeLowerCase } from './module/functions.js';


const firstAnswer = document.querySelector("#first-box");
const secondAnswer = document.querySelector("#second-box");

const inputField = document.querySelector("#input-field");
const btn = document.querySelector("#form-btn");


btn.addEventListener("click", () => {
    const value = inputField.value;

    firstAnswer.textContent = makeUpperCase(value);
    secondAnswer.textContent = makeLowerCase(value);
});

