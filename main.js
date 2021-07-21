function next(){
    var player1 = document.getElementById("user1").value;
    var player2 = document.getElementById("user2").value;
    localStorage.setItem("player-1", player1);
    localStorage.setItem("player-2", player2);
    window.location = "index2.html";
}