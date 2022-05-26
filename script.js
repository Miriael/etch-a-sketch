const cellContainer = document.querySelector('.cellContainer');
let userInput = 16

function removeBoard() {
  cellContainer.innerHTML = "";
}

function createBoard() {
  for (let i = 0; i < userInput; i++) {
    let y = document.createElement('div');
    y.setAttribute('class', 'rowContainer');
    cellContainer.append(y);
    for (let x = 0; x < userInput; x++) {
      let v = document.createElement('div');
      v.setAttribute('class', 'cell');
      v.setAttribute('style', `width: ${600 / userInput}px; height: ${600 / userInput}px;`)
      y.append(v);
    }
  }
  cellContainer.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('cell')) {
      e.target.style.background = 'grey';
    }
  });  
}


function promptValue() {
  userInput = prompt('What size would you like the grid to be? (Max value: 100)');
  while (userInput > 100) {
    userInput = prompt('What size would you like the grid to be? (Max value: 100)');
  }
  removeBoard();
  createBoard();
}

createBoard()