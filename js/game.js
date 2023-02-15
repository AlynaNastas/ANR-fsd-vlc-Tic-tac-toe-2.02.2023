// Recupera los nombres del sessionstorage y mostrarlo donde corresponde
const showPlayersName = () => {
    document.getElementById("P1").innerHTML = sessionStorage.getItem("nombre1")
    document.getElementById("P2").innerHTML = sessionStorage.getItem("nombre2")
}

showPlayersName();
const play1 = "X";
const play2 = "O";

let count1 = 0;
let count2 = 0;


//Iniciamos todas las celdas vacías
let board = [0,0,0,0,0,0,0,0,0]


//Inicio el juego en X
let turn = "X"



const changeTurn = () => {
turn = (turn == "X") ? "O" : "X"; // Si el turno esta en X lo cambia a O y si esta en la O a X.

};

//Para marcar la celda seleccionada
const marckCell= (id) => {
    if (board[id] === 0){
        board[id] = turn
        document.getElementById(id).innerHTML = turn
    }    
}

//Creamos funcincion para dar click sobre la celda

const pressCell = (position) => {
    if(count1 < 3){
        marckCell(position)
        winnerComb()
        changeTurn()
        count1++
    }else if(count2 < 3){
        marckCell(position)
        winnerComb()
        changeTurn()
        count2++
    }
}


const showWinner = () =>{

    if(play1 === true){

    }else{

    }
    let player1 = document.getElementById("P1").value;
    let player2 = document.getElementById("P2").value;
    sessionStorage.setItem("", player1);
    sessionStorage.setItem("", player2);
    window.location.href= "../pages/winner.html";


}

const winnerComb = () => {
    

        
    if(board[0] == play1 && board[1] == play1 && board[2] == play1){showWinner (play1)}
    if(board[0] == play2 && board[1] == play2 && board[2] == play2){showWinner (play2)}
    

    if(board[3] == play1 && board[4] == play1 && board[5] == play1){showWinner (play1)}
    if(board[3] == play2 && board[4] == play2 && board[5] == play2){showWinner (play2)}

    if(board[6] == play1 && board[7] == play1 && board[8] == play1){showWinner (play1)}
    if(board[6] == play2 && board[7] == play2 && board[8] == play2){showWinner (play2)}

    if(board[0] == play1 && board[3] == play1 && board[6] == play1){showWinner (play1)}
    if(board[0] == play2 && board[3] == play2 && board[6] == play2){showWinner (play2)}

    if(board[1] == play1 && board[4] == play1 && board[7] == play1){showWinner (play1)}
    if(board[1] == play2 && board[4] == play2 && board[7] == play2){showWinner (play2)}

    if(board[2] == play1 && board[5] == play1 && board[8] == play1){showWinner (play1)}
    if(board[2] == play2 && board[5] == play2 && board[8] == play2){showWinner (play2)}

    if(board[0] == play1 && board[4] == play1 && board[8] == play1){showWinner (play1)}
    if(board[0] == play2 && board[4] == play2 && board[8] == play2){showWinner (play2)}

    if(board[2] == play1 && board[4] == play1 && board[6]== play1){showWinner (play1)}
    if(board[2] == play2 && board[4] == play2 && board[6]== play2){showWinner (play2)}

}


