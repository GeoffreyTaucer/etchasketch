const containderdiv = document.getElementById('board');
dims = getDim()
containderdiv.style.width = dims
containderdiv.style.height = dims

function

numSquares = 16;

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