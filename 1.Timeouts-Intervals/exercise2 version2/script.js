let seconds = 0;
const para = document.querySelector("p");

function time() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes === 0 && seconds === 1) {
        para.textContent = "1 second has passed.";
    } else if (minutes === 0) {
        para.textContent = `${seconds} seconds have passed.`
    } else if (minutes === 1 && remainingSeconds === 0) {
        para.textContent = "1 minute has passed."
    } else if (minutes === 1 && seconds === 1) {
        para.textContent = "1 minute 1 second have passed."
    } else if (minutes === 1) {
          para.textContent = `1 minute ${remainingSeconds} seconds have passed.`;
    } else if (remainingSeconds === 0) {
            para.textContent = `${minutes} minutes have passed.`
          } else if (remainingSeconds === 1) {
            para.textContent = `${minutes} 1 second have passed.`
          }
          else {
        para.textContent = `${minutes} minutes ${remainingSeconds} seconds have passed.`;
    }
}

setInterval(time, 1000);