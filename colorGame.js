let colors = takeRandomColors(6);
let boxes = document.querySelectorAll(".boxes");
let guessThisColor = getColor();
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
                //change all colors
            changeAllColors(clickedColor)
        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again"
        }
    })
}

//make a function to change all colors
function changeAllColors(color) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color
    }
}

//get a random color to be guessed using the length of an array and using its generated number to access the index of that array
function getColor() {
    var getRandomColor = Math.floor(Math.random() * colors.length);
    return colors[getRandomColor];
};

//this function limits the number of colors to be pushed in an array
function takeRandomColors(num) {
    let arrOfColors = []
    for (let i = 0; i < num; i++) {
        arrOfColors.push(createRandomColors())
    }
    return arrOfColors;
}

function createRandomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}