function CreateBoard(size, color = "black") {
  let boardDims = "repeat(" + size.toString() + ", 1fr)";
  containerdiv.style.gridTemplate = boardDims + "/" + boardDims;
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.color = "white";
    square.textContent = i.toString();
    square.addEventListener("mouseover", function() {colorSquare(square, color)});
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

function colorSquare(square, color) {
  square.style.color = color;
  square.style.backgroundColor = color;
}

function resetBoard() {
  while (containerdiv.firstChild) {
    containerdiv.removeChild(containerdiv.firstChild);
  }
  let boardRes = parseInt(prompt("Please enter integer value for board resolution"));
  if (!boardRes) {
    document.getElementById('status').textContent="No integet value given";
    CreateBoard(16);
  } else {
    CreateBoard(boardRes);
  }
}

const containerdiv = document.getElementById('board');
let sizeOfWindow = GetDim();
containerdiv.style.width = sizeOfWindow.toString() + "px";
containerdiv.style.height = sizeOfWindow.toString() + "px";

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

let numSquares = 16;
let color = "black"

CreateBoard(numSquares, color);