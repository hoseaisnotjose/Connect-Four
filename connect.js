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
turn,
winner




/*------------ cached/store element references ----------------*/
const tableData = document.querySelectorAll('td')
document.querySelectorAll('tr')
document.querySelectorAll('table')



/*--------------- event listeners -------------*/
document.querySelector('#n').addEventListener('click', init);
// document.querySelector('table').addEventListener('click', )



/*-------------- functions ---------------*/
function handleMove(e) {
    console.log(e.target)
  // get row and column number from e.target (refer to console/inspect)
  // next, use row/column number to access gameBoard[row number][circle number]
  // change position in gameBoard array to player  

    }

const render = () => {
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
            tr.appendChild(td)
        }   
        table.appendChild(tr)
    }
    document.getElementById("gameBoard").appendChild(table)
}


function init() {
    
    turn = 1;
    winner = null;
    render();
}

// function theWinner() {
//     for (let i = 0; i < winningCombos.length; i++)
// }

wrongTurn = [];


// init()

// Finish initializing state before calling render()