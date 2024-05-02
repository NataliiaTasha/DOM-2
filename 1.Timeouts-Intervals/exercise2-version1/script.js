let seconds = 0;
const para = document.querySelector("p");

function time() {
    seconds++;
    if (seconds === 60) {
        para.textContent = "1 minute has passed.";
    } else if (seconds % 60 === 0) {
        const minutes = seconds / 60;
        para.textContent = `${minutes} minutes have passed.`;
          } else {
        para.textContent = `${seconds} seconds have passed.`;
    }
}

setInterval(time, 1000);