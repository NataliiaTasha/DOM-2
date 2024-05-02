let seconds = 0;
const para = document.querySelector("p");

function time() {
    seconds++;
    
    if (seconds === 1) {
        para.textContent = `${seconds} second has passed.`;
          } else if (seconds < 60) {
            para.textContent = `${seconds} seconds have passed.`;

          } else {
                para.textContent = "1 minute has passed.";
                minuteInterval();
            }
    }

    function minuteInterval() {
        const minutes = Math.floor(seconds / 60);

        if (minutes === 1) {
            para.textContent = "1 minute has passed.";
        } else {
            para.textContent = `${minutes} minutes have passed.`;
        }

    }


setInterval(time, 1000);
setInterval(minuteInterval, 60000);