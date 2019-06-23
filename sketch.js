function CreateBoard(size) {
  let boardDims = "repeat(" + size.toString() + ", 1fr)";
  containerdiv.style.gridTemplate = boardDims + "/" + boardDims;
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.color = "white";
    square.style.border = "solid black 1px";
    square.textContent = i.toString();
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
  return maxDim;
}

const containerdiv = document.getElementById('board');
let sizeOfWindow = GetDim();
containerdiv.style.width = sizeOfWindow.toString() + "px";
containerdiv.style.height = sizeOfWindow.toString() + "px";

let numSquares = 16;

CreateBoard(numSquares);