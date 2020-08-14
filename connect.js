console.log("hello connect four");
/*--------------- constants --------------*/
const lookUp = {
    '1': 'red',
    '-1': 'green',
    'null': 'black'
}

const gameBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
];


/*-------------- game's state (variables) -----------------*/
let circle,
wrongTurn,
currentPlayer,
winner




/*------------ cached/store element references ----------------*/
const tableData = document.querySelectorAll('td');
// document.querySelectorAll('tr')
// document.querySelectorAll('table')



/*--------------- event listeners -------------*/
document.querySelector('#n').addEventListener('click', init);
// document.querySelector('table').addEventListener('click', handleMove)



/*-------------- functions ---------------*/
function handleMove(e) {
//     // console.log(e.target.cellIndex)
//   // get row and column number from e.target (refer to console/inspect)
//   // next, use row/column number to access gameBoard[row number][circle number]
//   // change position in gameBoard array to player  
    clickSlots(e.target.cellIndex)
}

for (let i = 0; i < tableData.length; i++) {
    tableData[i].addEventListener('click', (e) => {
        clickSlots(e.target.cellIndex);
    })
}

function clickSlots(colIdx) {
    console.log(colIdx);
    if (gameBoard[0][colIdx]) {
        console.log('this is filled');
        return;
    }
    let isFilled = true;
    let row = 5;
    while(isFilled) {
        if (gameBoard[row][colIdx] == null) {
            gameBoard[row][colIdx] = currentPlayer;
            isFilled = false;
            currentPlayer *= -1;
            console.log(currentPlayer);
        } else {
            // check the next row
            row--;
        }
        
    }
    console.log(gameBoard);
    // check "win call" here
    render();
}
    
// function checkCol(colIndex) {
    // start at the bottom of the column. If that's occupied, we'll move up and check
  

const render = () => {
    document.getElementById("gameBoard").innerHTML = ''
    const table = document.createElement('table');
    table.addEventListener('click', handleMove)
    for (let i = 0; i < gameBoard.length; i++) {
        const tr = document.createElement('tr')
        tr.id = `row${i}`
        for (let y = 0; y < gameBoard[i].length; y++) {
            const td = document.createElement('td')
            td.className = `c${y} row${i}`
            gameBoard[i][y]
                ? td.className+= ` p${gameBoard[i][y]}`
                : null
            if (gameBoard[i][y] === 1) {
                td.style.backgroundColor = 'red'
            } else if (gameBoard[i][y] === -1) {
                td.style.backgroundColor = 'green'
            }
            tr.appendChild(td)
        }   
        table.appendChild(tr)
    }
    document.getElementById("gameBoard").appendChild(table)
}

init();
function init() {
    
    currentPlayer = 1;
    turn = 1;
    winner = null;
    render();
}

// function theWinner() {
//     for (let i = 0; i < winningCombos.length; i++)
// }

wrongTurn = [];


init()

// Finish initializing state before calling render()