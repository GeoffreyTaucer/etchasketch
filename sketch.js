let containderdiv = document.getElementById('#board');

function createRow (size) { // create a single row
    let row = document.createElement('div');
    let square = document.createElement('span');
    square.style.height = '10px';
    square.style.width = '10px';
    square.style.border = '1px solid black'

    for (let i = 0; i < size; i++) {
        row.appendChild(square);
    }
    return row;
}

function createBoard(size) { // Stack rows
    for (let i = 0; i < size; i++) {
        containderdiv.appendChild(createRow(size));
    }
}

const boardSize = parseInt(window.prompt("Enter board size", ""), 10); // get board size from user

createBoard(boardSize)
