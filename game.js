var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const ME = 1;
const AI = -1;

function evaluate() {

}

function gameOver() {
    
}

function emptyCells() {
    
}

function setMove(row, col, player) {
    
}

function minimax(depth, isMaximizing) {
    
}

function aiTurn() {
    
}

function clickedCell(event) {
    
}

document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", clickedCell));
document.getElementById("btn-restart").addEventListener("click", function() {
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    document.querySelectorAll("td").forEach(cell => cell,this.innerText = "");
    document.getElementById("message").innerText = "";
});