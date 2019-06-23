function CreateBoard(size) {
  let boardDims = "repeat(" + size.toString() + ", 1fr)";
  containerdiv.style.gridTemplate = boardDims + "/" + boardDims;
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.color = "white";
    square.textContent = i.toString();
    square.addEventListener("mouseover", function() {ColorSquare(square)});
    containerdiv.appendChild(square);
  }
}

function GetDim () {
  let maxHeight = window.innerHeight;
  let maxWidth = window.innerWidth;

  if (maxWidth <= maxHeight) {
    maxDim = maxWidth
  } else {
    maxDim = maxHeight
  }
  return maxDim - 2; // subtract two pixels, to allow for border
}

function ColorSquare(square) {
  square.style.color = color;
  square.style.backgroundColor = color;
}

function resetBoard() {
  while (containerdiv.firstChild) {
    containerdiv.removeChild(containerdiv.firstChild);
  }
  let boardRes = parseInt(prompt("Please enter integer value for board resolution"));
  if (!boardRes) {
    document.getElementById('status').textContent="No integer value given";
    CreateBoard(16);
  } else {
    document.getElementById('status').textContent=""
    CreateBoard(boardRes);
  }
}

function CreatePalette(colors) {
  let palette = document.getElementById("palette")
  palette.style.gridTemplateColumns = "1fr 1fr"
  colors.forEach(e => {
    let paletteSquare = document.createElement("div");
    paletteSquare.classList.add("color-square");
    paletteSquare.style.color = e;
    paletteSquare.style.backgroundColor = e;
    paletteSquare.textContent = e;
    paletteSquare.style.width = "50px";
    paletteSquare.style.height = "50px";
    paletteSquare.style.border = "solid black 1px";
    paletteSquare.addEventListener("click", function() {
      color = e;
    });
    paletteSquare.style.fontSize = "0";
    palette.appendChild(paletteSquare);
  });
}

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white", "gray"];

const containerdiv = document.getElementById('board');
let sizeOfWindow = GetDim();
containerdiv.style.width = sizeOfWindow.toString() + "px";
containerdiv.style.height = sizeOfWindow.toString() + "px";

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

let numSquares = 16;
let color = "black";

CreateBoard(numSquares);
CreatePalette(colors);