let letter = 0;
let intervalId;
const para = document.querySelector("p");

function printLetter(word) {
    if (letter < word.length) {
        para.textContent += word[letter];//add new letter to paragraph 
        letter++;
    } else{
        clearInterval(intervalId);
    }
} 

function typewriter(word) {
    const intervalId = setInterval(() => printLetter(word), 1000);
}

typewriter("Keller");