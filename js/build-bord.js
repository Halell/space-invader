'use strict'

const SKY = 'SKY'

// Matrix of cell objects. {type: SKY, gameObj: ALIEN}
function createBoard() {
    var board = []
    for (var i = 0; i < 14; i++) {
        board[i] = []
        for (var j = 0; j < 14; j++) {
            board[i][j] = { type: SKY, gameObj: null }
            //create frame
            if (i === 0 || i === 13) {
                board[i][j].type = 'frame horizontal'
                board[i][j].gameObj = 'frame'
                if (j === 0 || j === 13) board[i][j].type = 'frame corners'
            }
            else if (j === 0 || j === 13) {
                board[i][j].type = 'frame vertical'
                board[i][j].gameObj = 'frame'
            }
            //alien in 4 upper rows 7 left cells                               // later change to var option
            if (i > 0 && i < gAliens.length + 1 &&
                j > 0 && j <= gAliens[0][0]) board[i][j].gameObj = ALIEN
        }
    }
    //gamer in bottom left corner
    board[12][1].gameObj = HERO
    return board
}

function createCell(gameObj = null) {
    return {
        type: SKY,
        gameObj: gameObj
    }
}

