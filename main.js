console.log('JS is now offically linked up'); 

/*------ Constants -----*/

/*----- App's state (varibles) ----*/
let board; 
let turn = 'X'; 

/*----- Cached element refences ----*/
const squares = Array.from(document.querySelectorAll('#board div')); 
const messages = document.querySelector('h2'); 


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn); 

/*----- functions -----*/ 
function handleTurn(event){ 
    let idx = squares.findIndex(function(square){ 
        return square === event.target; 
    }); 

board[idx] = turn; 

turn = turn === 'X' ? 'O' : 'X'; 

console.log(board); 
}; 

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
        
        messages.textContent = `It's ${turn}'s turn`; 
    }; 
    render(); 
}; 

init(); 



