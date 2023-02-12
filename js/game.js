// Recupera los nombres del sessionstorage y mostrarlo donde corresponde
const showPlayersName = () => {
    document.getElementById("P1").innerHTML = sessionStorage.getItem("nombre1")
    document.getElementById("P2").innerHTML = sessionStorage.getItem("nombre2")
}

showPlayersName();

//Inicio el juego en X
let turn = "X"
//Iniciamos todas las celdas vacías
let board = [0,0,0,0,0,0,0,0,0]


const changeTurn = () => {

 turn = (turn == "X") ? "O" : "X" // Si el turno esta en X lo cambia a O y si esta en la O a X.

}
//Para marcar la celda seleccionada
const marckCell= (id) => {
    if(board[id] === 0){
        board[id] = turn
        document.getElementById(id).innerHTML = turn
        changeTurn()
    }
}

//Creamos funcincion para dar click sobre la celda

const pressCell = (position) => {
    marckCell(position)
}
