let boxes = document.querySelectorAll('.button');

let resetBtn = document.querySelectorAll('.reset');

let pop = document.getElementsByClassName('pop');

let newgame = document.querySelector('.newGame');
let reset = document.querySelector('.reset')

let winners = document.querySelector('.winner')
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let playerX = true;

const enableBox  = ()=> {
    playerX = true;
    for(let box of boxes){
        box.innerText = '';
        box.disabled = false;
    }
}

const resetG = ()=>{
    enableBox()
        winners.classList.add("hide")
}


boxes.forEach(box=>{
    box.addEventListener('click', () => {
        if (box.innerText === '') {
            box.innerText = playerX ? 'X' : 'O';
            playerX = !playerX;
            checkWinner();
        }
    });
})

let disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = ()=>{
    for(let patterns of wins){
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2 === pos3){
                
                disable();
                
                pop[0].innerText = `Player ${pos1} is Winner`;
                winners.classList.remove("hide")
            }
        }


    }
}

reset.addEventListener('click',resetG);
newgame.addEventListener('click',resetG);