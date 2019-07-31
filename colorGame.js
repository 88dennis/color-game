//function that returns an array of colors
let numBoxes = 6;
let colors = takeRandomColors(numBoxes);
let boxes = document.querySelectorAll(".boxes");

// let pieColors = document.querySelectorAll(".pieBack")
//function that returns one random color to be guessed
let guessThisColor = mysteryColor();

let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("#hContainers")
let shuffleBtn = document.querySelector("#shuffleColors")
let easyBtn = document.querySelector("#easy")
let hardBtn = document.querySelector("#hard")
let scoreDisplay = document.querySelector("#scoreDisplay")
let modeBtn = document.querySelectorAll(".mode")

let score = 0;

messageDisplay.textContent = "Start Guessing Now"
scoreDisplay.textContent = score
hardBtn.classList.add("difficulty")

for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function() {
        modeBtn[0].classList.remove("difficulty")
        modeBtn[1].classList.remove("difficulty")
        modeBtn[i].classList.add("difficulty")
        if (modeBtn[i].textContent === "Easy") {
            numBoxes = 3
        } else {
            numBoxes = 6
        }
        resetMode();
    })
}

function resetMode() {
    colors = takeRandomColors(numBoxes)
    guessThisColor = mysteryColor();
    colorDisplay.textContent = guessThisColor;
    messageDisplay.textContent = "Start Now!"
    hardBtn.textContent = "Hard"
    for (let i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.display = "block"
            boxes[i].style.backgroundColor = colors[i]
        } else {
            boxes[i].style.display = "none"
        }
    }
    console.log(colors, guessThisColor)
    h1.style.backgroundColor = "steelblue"
    messageDisplay.style.backgroundColor = "transparent"
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("difficulty");
//     hardBtn.classList.remove("difficulty");
//     numBoxes = 3;
//     colors = takeRandomColors(numBoxes);
//     guessThisColor = mysteryColor();
//     colorDisplay.textContent = guessThisColor;
//     messageDisplay.textContent = "Start Now!"
//     hardBtn.textContent = "Hard"
//     h1.style.backgroundColor = "steelblue"
//     messageDisplay.style.backgroundColor = "transparent"
//     for (let i = 0; i < boxes.length; i++) {
//         if (colors[i]) {
//             boxes[i].style.backgroundColor = colors[i]
//             boxes[i].style.display = "block"
//         } else {
//             boxes[i].style.display = "none"
//         }
//     }
//     console.log(colors)
// })

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("difficulty")
//     easyBtn.classList.remove("difficulty")
//     numBoxes = 6;
//     colors = takeRandomColors(numBoxes)
//     guessThisColor = mysteryColor();
//     colorDisplay.textContent = guessThisColor;
//     messageDisplay.textContent = "Start Now!"
//     hardBtn.textContent = "Hard"
//     h1.style.backgroundColor = "steelblue"
//     messageDisplay.style.backgroundColor = "transparent"
//     for (i = 0; i < boxes.length; i++) {
//         boxes[i].style.backgroundColor = colors[i]
//         boxes[i].style.display = "block"
//     }
// })

shuffleBtn.addEventListener("click", function() {
    numBoxes = 6;
    colors = takeRandomColors(numBoxes)
    guessThisColor = mysteryColor();
    colorDisplay.textContent = guessThisColor;
    messageDisplay.textContent = "Start Now!"
    hardBtn.classList.add("difficulty")
    easyBtn.classList.remove("difficulty")
    score = 0;
    scoreDisplay.textContent = score
    hardBtn.textContent = "Hard"
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "block"
        boxes[i].style.backgroundColor = colors[i]

    }
    location.reload()
    hardBtn.classList.add("difficulty")
    console.log(colors, guessThisColor)
    h1.style.backgroundColor = "steelblue"
    messageDisplay.style.backgroundColor = "transparent"
})

colorDisplay.textContent = guessThisColor;

// for (let i = 0; i < pieColors.length; i++) {
//     pieColors[i].style.backgroundColor = colors[i];
// }
for (let i = 0; i < boxes.length; i++) {
    //add colors to boxes
    boxes[i].style.backgroundColor = colors[i];
    //add click listeners to boxes
    boxes[i].addEventListener("click", function() {
        //get color of clicked box
        var clickedColor = this.style.backgroundColor
        if (clickedColor === guessThisColor) {
            messageDisplay.textContent = "Correct!"
            score = score + 1
            scoreDisplay.textContent = score
            messageDisplay.style.backgroundColor = clickedColor
                //change all colors
            h1.style.backgroundColor = clickedColor
            hardBtn.textContent = "Click to continue playing"
            changeAllColors(clickedColor)
            console.log(clickedColor)
        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again, you picked " + clickedColor
            messageDisplay.style.backgroundColor = clickedColor
            console.log(clickedColor)
        }
    })
}
//make a function to change all colors
function changeAllColors(color) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none"
    }
}

//get a random color to be guessed using the length of an array and using its generated number to access the index of that array
function mysteryColor() {
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
};