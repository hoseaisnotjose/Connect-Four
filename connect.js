console.log("hello connect four");
/*--------------- constants --------------*/
const lookUp = {
    '1': 'red',
    // '-1': 'green',
    'null': 'black'
}




/*-------------- game's state (variables) -----------------*/
let circle,
let wrongTurn,
let turn,
let winner,




/*------------ cached/store element references ----------------*/
document.querySelectorAll('.td')
document.querySelectorAll('tr')
document.querySelectorAll('table')



/*--------------- event listeners -------------*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('#n').addEventListener('click', initialize);



/*-------------- functions ---------------*/
init();

function initialize() {
    gameBoard = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ];
    turn = 1;
    winner = null;
    render();
}

wrongTurn = [];


    // Finish initializing state before calling render()

