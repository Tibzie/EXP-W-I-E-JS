


export function makeUpperCase(word) {
    return word.toUpperCase();
}

export function makeLowerCase(word) {
    return word.toLowerCase();
}
export function countChar(word) {
    return word.length;
}
export function reverseWord(word) {
    return word.split("").reverse().join("");
}
export function interpolateWords(word) {
    return `${word} ate the fish.`
}
export function removeFirstLast(word) {
    return word.substring(1, word.length-1);
}
export function repeatWord(word) {
    return word.repeat(2);
}
export function randomChar(word) {
    return word.charAt(Math.floor(Math.random() * 10) + 1);
}
export function includeChar(word) {
    const question = word.includes("p")
    return question == true ? "it includes that character" : "nope, not in this one";
}

