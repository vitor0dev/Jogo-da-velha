let board = [ '','','','','','','','',''];
let playerTime = 0;
let gamerOver = false;

let symbols = ['o', 'x'];


let winStates =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position) {
    if(gamerOver) return;

    if(board[position] == '') {
        board[position] = symbols[playerTime];

        gamerOver = isWin();

        if(gamerOver == false) {   
            velha(); // chama a checagem de empate aqui
            if(!gamerOver){
                playerTime = playerTime === 0 ? 1 : 0;

                updatePlayerTime(); // Atualiza a vez do jogador
            }
        }
    } 
    return gamerOver;
}


function isWin(){

    for(let i =0; i<winStates.length;i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] && 
            board[pos1] != '') {
                return true;
            }
    }
    return false;
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gamerOver = false;

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove("x", "o");
  });
}

function velha(){
    if(gamerOver) return;

    if(!board.includes('')) {
        gamerOver = true;
        alert("O Jogo Acabou - Deu velha!");
        resetGame();
    }
}

// Supondo que playerTime = 0 para jogador 1, e 1 para jogador 2
const playerTimeText = document.getElementById('player-time');

function updatePlayerTime() {
  playerTimeText.textContent = `Vez do jogador ${playerTime + 1}`;
}



