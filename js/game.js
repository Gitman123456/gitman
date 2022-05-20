var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const ME = 1
const AI = -1

function evalute() {

}

function gameOver(state, player) {
    var win_state = [
        [state[0][0],state[0][1],state[0][2]],
        [state[1][0],state[1][1],state[1][2]],
        [state[2][0],state[2][1],state[2][2]],
        [state[0][0],state[1][0],state[2][0]],
        [state[0][1],state[1][1],state[2][1]],
        [state[0][2],state[1][2],state[2][2]],
        [state[0][0],state[1][1],state[2][2]],
        [state[0][2],state[1][1],state[2][0]]
    ];

    for (var i = 0; i < 8; i++) {
        var line = win_state[i]
        var count = 0
        for (var j = 0; j < 3;j++) {
            if (line[j] == player) {
                count++;
            }
        }
        
        if (count == 3) {
            return true;
        }
    }
    
    return false;
}

function gameOverAll() {

}

function emptyCells() {

}

function setMove() {

}

function minmax() {

}

function aiTurn() {

}

function clickedCell() {

}

function restartBtn() {

}
