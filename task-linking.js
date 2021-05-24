import { 
    makeUpperCase,
    makeLowerCase,
    reverseWord,
    countChar,
    interpolateWords,
    removeFirstLast,
    repeatWord,
    randomChar,
    includeChar
} from './module/functions.js';


const firstAnswer = document.getElementById("first-box");
const secondAnswer = document.getElementById("second-box");
const thirdAnswer = document.getElementById("third-box");
const fourthAnswer = document.getElementById("fourth-box");
const fifthAnswer = document.getElementById("fifth-box");
const sixthAnswer = document.getElementById("sixth-box");
const seventhAnswer = document.getElementById("seventh-box");
const eigthAnswer = document.getElementById("eigth-box");
const ninthAnswer = document.getElementById("ninth-box");

const inputField = document.querySelector("#input-field");
const btn = document.querySelector("#form-btn");


btn.addEventListener("click", () => {
    const value = inputField.value;

    firstAnswer.textContent = makeUpperCase(value);
    secondAnswer.textContent = makeLowerCase(value);
    thirdAnswer.textContent = countChar(value);
    fourthAnswer.textContent = reverseWord(value);
    fifthAnswer.textContent = interpolateWords(value);
    sixthAnswer.textContent = removeFirstLast(value);
    seventhAnswer.textContent = repeatWord(value);
    eigthAnswer.textContent = randomChar(value);
    ninthAnswer.textContent = includeChar(value);
});

