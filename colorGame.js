//function that returns an array of colors
let colors = takeRandomColors(6);

let boxes = document.querySelectorAll(".boxes");

//function that returns one random color to be guessed
let guessThisColor = getColor();

let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let shuffleBtn = document.querySelector("#shuffleColors")
let easyBtn = document.querySelector("#easy")
let hardBtn = document.querySelector("#hard")

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("difficulty")
    hardBtn.classList.remove("difficulty")
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("difficulty")
    easyBtn.classList.remove("difficulty")
})

shuffleBtn.addEventListener("click", function() {
    colors = takeRandomColors(6)
    guessThisColor = getColor();
    colorDisplay.textContent = guessThisColor;
    messageDisplay.textContent = "Start Guessing Now"
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i]
    }
})



colorDisplay.textContent = guessThisColor;

for (let i = 0; i < boxes.length; i++) {
    //add colors to boxes
    boxes[i].style.backgroundColor = colors[i];
    //add click listeners to boxes
    boxes[i].addEventListener("click", function() {
        //get color of clicked box
        var clickedColor = this.style.backgroundColor

        if (clickedColor === guessThisColor) {
            messageDisplay.textContent = "Correct!"
                //change all colors
            h1.style.backgroundColor = clickedColor
            changeAllColors(clickedColor)
            console.log(clickedColor)
        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again"
            console.log(clickedColor)
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
    let arrOfColors = [];
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
};;