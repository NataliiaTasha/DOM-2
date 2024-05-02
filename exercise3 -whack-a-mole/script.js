const circles = document.querySelectorAll(".circle");
const displayScore = document.querySelector(".score");

function circleRandomizer() {
    // circles.forEach(circle => {
    //     circle.classList.remove ("active");
    //     });
    const randomIndex = Math.floor(Math.random() * circles.length);
    const randomCircle = circles[randomIndex];
    randomCircle.classList.add("active");
   
    randomCircle.style.backgroundColor = "red";

    setTimeout(() => {
        randomCircle.classList.remove("active");
        randomCircle.style.backgroundColor = "beige";
    }, 2000);
}

function changeScore() {
    score++;
    displayScore.textContent = `Score: ${score}`;
}

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        if (circle.classList.contains("active")) {
            changeScore();
        }
    });
});