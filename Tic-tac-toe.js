
class TicTacToe{
    
    constructor(){

     this.initializeGrid();

    }

 initializeGrid(){
    const turnHeading=document.getElementById('turn-heading');
    turnHeading.classList.remove('hidden');
    const winnerAnnouncer=document.getElementById('winner-announce');  

    winnerAnnouncer.classList.add('hidden');
  
    this.grid=[['','',''],['','',''],['','','']];
    
    this.playState=true;
    //because X starts first
    this.lastPlayed='O';
    this.x='X';
    this.o='O';
    this.winner='';
  

}   

//displaying the grid data in the dom

 displayGrid(){

        const boxes=document.getElementsByClassName('box');
        
   

        for(let box of boxes){
     
            
            const [row, ,col]=Array.from(box.id);
            
            //displaying data
            box.innerHTML=this.grid[row][col];

            //styling 
            if(box.innerHTML===this.x){

                box.classList.remove('playerO');
                box.classList.add('playerX')

            }else{
              
                box.classList.remove('playerX')
                box.classList.add('playerO');
            }


        }

    
        
    }
  
    
    //updates the grid array
   
    updateGrid(element){

        const [row, ,col]=Array.from(element.id);
            
        if(!element.innerHTML && this.playState===true){

       if(this.lastPlayed===this.x){
        
        this.grid[row][col]=this.o
       
        this.lastPlayed=this.o;
       }
       else{


        this.grid[row][col]=this.x;
        this.lastPlayed=this.x;

       }

        }

   this.updateTurn()
   this.displayGrid();
   this.checkWinner();
   if(!this.checkWinner()){
    this.checkDraw();

   };
    

        
    }
 

    //updates the turn box 

    updateTurn(){
      const turnBox=document.getElementById('turn')
      const turnHeading=document.getElementById('turn-heading');
      if(this.checkWinner() ||this.checkDraw()){
     
        turnHeading.classList.add('hidden');

        return ;


      }

      else if(this.lastPlayed===this.x){
        turnBox.innerHTML=this.o;
        turnBox.classList.remove('playerX')
        turnBox.classList.add('playerO')

      }
      else{
        turnBox.innerHTML=this.x;
        turnBox.classList.remove('playerO')
        turnBox.classList.add('playerX')

      }


    }

    

checkWinner(){

    // x x x in all rows;

   for(let i=0;i<3;i++)
   {
    
    // x x x in all rows;
     if( this.grid[0][i] === this.grid[1][i] && this.grid[1][i]===this.grid[2][i]
       && 
       (this.grid[0][i]!=='' && this.grid[0][i]!=='' && this.grid[0][i]!=='' )
       ){

        this.declareWinner();
        return true;
      
       }
      //x x x  in all columns 
     else if(

     (this.grid[i][0] === this.grid[i][1] && this.grid[i][1]===this.grid[i][2])
     && 
     (this.grid[i][0]!=='' && this.grid[i][1]!=='' && this.grid[i][2]!=='' )
     
     ){
 
        this.declareWinner();
        return true;
     }
     
}
//diagonal case

 if(((this.grid[0][0]===this.grid[1][1] &&
    this.grid[1][1]===this.grid[2][2]) 
    ||(this.grid[0][2]=== this.grid[1][1] &&this.grid[1][1]=== this.grid[2][0])
    )
    &&(
       (this.grid[0][0]!=='' && this.grid[1][1]!==''  && this.grid[2][2]!=='')
       ||(this.grid[0][2]!=='' && this.grid[1][1]!=='' && this.grid[2][0]!=='')
    )){
        this.declareWinner();
          return true;

     }


     return false;
   
}


declareWinner(){
    const winnerBox=document.getElementById('winner');
    const winnerAnnouncer=document.getElementById('winner-announce');   
    winnerAnnouncer.classList.remove('hidden')
    winnerBox.innerHTML=this.lastPlayed;
    winnerBox.classList.add(`player${this.lastPlayed}`);
    this.playState=false;
  
}

resetGrid(){

    
  

    this.initializeGrid();







}

checkDraw(){
    const drawElement=document.getElementById('draw');
    for(let i=0;i<3;i++){

        for(let j=0;j<3;j++){

            if(this.grid[i][j]==='')
            {
                    
                drawElement.classList.add('hidden');
                return false;

            }
            
        }
    }

    drawElement.classList.remove('hidden');

    return true;




}



    

}
export default TicTacToe;