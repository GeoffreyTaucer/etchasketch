const containderdiv = document.getElementById('board');

function createRow(size) { // create a single row
    let row = document.createElement('div');
  
    for (let i = 0; i < size; i++) {
      let square = document.createElement('span');
      square.appendChild(document.createTextNode('_'))
      square.style.height = '10px';
      square.style.width = '10px';
      square.style.border = '1px solid black'
      row.appendChild(square);
    }
    
    return row;
  }

function createBoard(size) { // Stack rows
    for (let i = 0; i < size; i++) {
        containderdiv.appendChild(createRow(size));
    }
}

boardSize = 16;

createBoard(boardSize);
