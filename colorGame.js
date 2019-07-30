let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)"
]

let boxes = document.querySelectorAll(".boxes");
let guessThisColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")

colorDisplay.textContent = guessThisColor;

for (let i = 0; i < boxes.length; i++) {
    //add colors to boxes
    boxes[i].style.backgroundColor = colors[i];
    //add click listeners to boxes
    boxes[i].addEventListener("click", function() {
        //get color of clicked box
        var clickedColor = this.style.backgroundColor

        if (clickedColor === guessThisColor) {
            messageDisplay.textContent = "Correct"
            changeAllColors(clickedColor)
        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeAllColors(color) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color
    }
}