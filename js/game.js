// Recupera los nombres del sessionstorage y mostrarlo donde corresponde
const showPlayersName = () => {
    document.getElementById("P1").innerHTML = sessionStorage.getItem("nombre1")
    document.getElementById("P2").innerHTML = sessionStorage.getItem("nombre2")
}

showPlayersName();
