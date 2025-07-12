document.addEventListener('DOMContentLoaded' , ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=> {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Acabou - O vencedor foi o jogador " + symbols[playerTime]);
            resetGame(); // limpa o tabuleiro e reinicia
        }, 10); // espera o alert antes de limpar
    }

    updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position);
  let symbol = board[position];

  square.classList.remove("x", "o");

  if (symbol !== "") {
    square.classList.add(symbol);
  }
}
