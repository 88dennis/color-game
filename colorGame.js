let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)"
]

let boxes = document.querySelectorAll(".boxes");


for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i]
}