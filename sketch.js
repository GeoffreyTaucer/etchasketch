const containderdiv = document.getElementById('board');

function createRow(size) { // create a single row
    let row = document.createElement('div');
    row.setAttribute('class', 'row')
  
    for (let i = 0; i < size; i++) {
      let square = document.createElement('span');
      square.setAttribute('class', 'square');
      square.appendChild(document.createTextNode('o'));
      square.style.color = 'white'
      square.style.background = 'white'
      square.style.border = 'solid black 1px'
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
