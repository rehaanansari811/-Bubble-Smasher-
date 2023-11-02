var hitNum = 0;
var clutter = "";
var time = 60;
var score = 0;

function makeBubble() {

    for (let i = 0; i < 75; i++) {

        var n = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"><h4>${n}</h4></div>`
        document.querySelector(".p-bottom").innerHTML = clutter;

    }
}

function timer() {
    var timeInt = setInterval(function () {
        if (time >= 0) {
            document.querySelector(".timerval").textContent = time;
            time--;
        }
        else {
            clearInterval(timeInt);
            document.querySelector(".p-bottom").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

function hit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = hitNum;
}

document.querySelector(".p-bottom")
    .addEventListener("click", function (details) {
        var clickedNum = Number(details.target.textContent);
        if (hitNum === clickedNum) {
            getScore()
            hit()
            clutter = ""
            makeBubble()
        }
    })

timer()
makeBubble()
hit()

