
const play = () => {
//DOCUMENT ES TODO NUESTRO HTML Y ES PARA SABER QUÉ ID COGER, CON EL VALOR QUE VA DENTRO.

    let player1 = document.getElementById("P1").value;
    let player2 = document.getElementById("P2").value;
    
    if (player1 != "" && player2 != "") {
        sessionStorage.setItem("nombre1", player1);
        sessionStorage.setItem("nombre2", player2);
        window.location.href= "../pages/games.html";   
    } else {
        alert("Tienes que introducir todos los nombres");
    }
}
