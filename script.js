let containercontainer = document.querySelector("body");

let button = document.querySelector(".btn");
button.addEventListener("mousedown", ()=>changeBoard());


function addColor(toChange, color) {
    console.log(toChange.style.height);
    toChange.style.backgroundColor = color;
}

function initBoard(numBoxes) {
    let playArea = document.querySelector('.container');
    let height = playArea.clientHeight, width = playArea.clientWidth;
    let boxHeight = height / numBoxes, boxWidth = width / numBoxes;

    console.log(height);
    console.log(boxHeight);

    containercontainer.removeChild(playArea);
    playArea = document.createElement("div");
    playArea.classList.add("container");
    containercontainer.append(playArea);

    let color = 'green';

    for (let i = 0; i < numBoxes; i++) {
        for (let j = 0; j < numBoxes; j++) {
            let box = document.createElement('div');
            box.classList.add("box");
            box.style.height = boxHeight.toString() + "px";
            box.style.width = boxWidth.toString() + "px";
            box.style.boxSizing = "border-box";
            box.style.border = "1px solid black";

            box.addEventListener('mouseover', () => addColor(box, color));

            playArea.appendChild(box);
        }
    }
}

function changeBoard() {
    let newBoardSize = prompt('How many squares per side would you like?');
    while (isNaN(newBoardSize)) {
        newBoardSize = prompt('Not a valid input, please try again');
    }
    
    initBoard(Number(newBoardSize));
}


initBoard(16);
