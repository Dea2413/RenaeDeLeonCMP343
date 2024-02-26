console.log('JS is now offically linked up'); 

/*------ Constants -----*/

/*----- Cached element refences ----*/
const squares = Array.from(document.querySelectorAll('#board div')); 

/*----- App's state (varibles) ----*/
let board; 
let turn = 'X'; 

//Board function 
function init(){ 
    board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ]; 

    //Render function 
    function render(){ 
        board.forEach(function(mark, index){ 
           console.log(mark, index);
           squares[index].textContent = mark; 
        }); 
    }; 
    render(); 
}; 

init(); 

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn); 

/*----- functions -----*/ 
function handleTurn(event){ 
    let idx = squares.findIndex(function(square){ 
        return square === event.target; 
    }); 

board[idx] = turn; 

console.log(board); 
}; 




