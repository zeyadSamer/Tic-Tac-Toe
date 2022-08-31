import TicTacToe from '/Tic-tac-toe.js';




const ticTacToe=new TicTacToe();





const box=document.addEventListener('click',(event)=>{


    ticTacToe.updateGrid(event.target);

 
});


const resetButton=document.getElementById('reset');

resetButton.addEventListener('click',()=>{

    ticTacToe.resetGrid();
    ticTacToe.displayGrid();


})