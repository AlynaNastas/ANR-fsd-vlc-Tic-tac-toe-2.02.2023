let winner = sessionStorage.getItem("winner");
if(winner == "play1"){
    document.getElementById("winnername").innerHTML = sessionStorage.getItem("nombre1")
}else if(winner == "play2"){
    document.getElementById("winnername").innerHTML = sessionStorage.getItem("nombre2")
}
