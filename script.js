const box = document.querySelectorAll('.box');
const newGame = document.querySelector('.new-game');
const resetGame = document.querySelector('.reset-game');
const winner = document.querySelector('.winner');
player = true;

const winPatterns = [ [0,1,2] , [3,4,5] , [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

box.forEach(el=>{
    el.addEventListener('click' , function(){
        if(player){
            el.innerText = 'X';
            player=false;
        }else{
            el.innerText = 'O';
            player=true;
        }
        el.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(patterns of winPatterns){
        const pos1Val1 = box[patterns[0]].innerText;
        const pos2Val2 = box[patterns[1]].innerText;
        const pos3Val3 = box[patterns[2]].innerText;

        if(pos1Val1 != '' && pos2Val2 != '' && pos3Val3 != ''){
            if(pos1Val1 === pos2Val2 && pos2Val2 === pos3Val3){
                winner.innerText = `Player ${pos1Val1} win's ):`
                resetGame.style.display = 'none';
                newGame.style.display = 'block';
            }
        }
    }
}


resetGame.addEventListener('click', function(){
    box.forEach(el=>{
        el.innerText = '';
        el.disabled = false;
    })
    winner.innerText = '';
})

newGame.addEventListener('click', function(){
    box.forEach(el=>{
        el.innerText = '';
        el.disabled = false;
    })
    winner.innerText = '';
    resetGame.style.display = 'block';
                newGame.style.display = 'none';
})