
'use strict'


const ALIEN_SPEED = 1000
var gIntervalAliens




// The following two variables represent the part of the matrix (some rows)
// that we should shift (left, right, and bottom)
// We need to update those when:
// (1) shifting down and (2) last alien was cleared from row
var gAliensTopRowIdx = 1
var gAliensBottomRowIdx = 4
var gIsAlienFreeze = true
// function createAliens(board) {}
var alienBottomIdx = 4
function handleAlienHit(pos) { }




function shiftAliens(direction, from, to, isEdge = false) {
    var counter = 1                  // change name
    for (var i = from.i; i <= alienBottomIdx; i++) {
        for (var j = from.j; j !== to.j + direction; j += direction) {
            if (!isEdge) {
                gBoard[i][j + (direction * -1)].gameObj = gBoard[i][j].gameObj
                if (j === to.j) gBoard[i][to.j].gameObj = null
            } else {
                gBoard[alienBottomIdx][j + (direction * -1)].gameObj = gBoard[alienBottomIdx - counter][j + (direction * -1)].gameObj
                if (alienBottomIdx - counter === from.i) {
                    gBoard[alienBottomIdx - counter][j + (direction * -1)].gameObj = null
                    if (j === to.j) {
                        console.log(gBoard)
                        i++
                    }
                }
            }
        }
        counter++
    }
    renderBoard(gBoard)
}



function shiftBoardLeft(board, fromI, toI) { }
function shiftBoardDown(board, fromI, toI) { }
// runs the interval for moving aliens side to side and down
// it re-renders the board every time
// when the aliens are reaching the hero row - interval stops









function moveAliens() {
    var direction = -1
    var idx = 1
    var from = { i: null, j: null }
    var to = { i: null, j: null }
    gIntervalAliens = setInterval(() => {
        if (gIsAlienFreeze) {
            if (direction === -1 && from.j === gBoard.length - 3) {
                alienBottomIdx++
                shiftAliens(direction, from, to, true)
                direction = 1
                idx++
                return
            }
            else if (direction === 1 && from.j === 2) {
                alienBottomIdx++
                shiftAliens(direction, from, to, true)
                direction = -1
                idx++
                return
            }
            from = checkAlienRows(idx, (direction === 1), true)
            to = checkAlienRows(idx, (direction !== 1), true)
            shiftAliens(direction, from, to)
            console.log(`{${direction}, from ${from.i}:${from.j}, to ${to.i}:${to.j}}`)
        }
    }, ALIEN_SPEED)
}











function checkAlienRows(idx, isGoingRt, isTop) {
    var isAlien = false
    var i = (isGoingRt) ? 1 : gBoard.length - 2
    var initialI = i
    while (!isAlien) {
        if (gBoard[idx][i].gameObj) isAlien = true            // what when cell obj is lazar?
        else i += (isGoingRt) ? 1 : -1

        if (isGoingRt && i === gBoard.length - 1) {
            idx += (isTop) ? 1 : -1
            i = initialI
        } else if (!isGoingRt && i === 1) {
            idx--
            i = initialI
        }
    }
    return { i: idx, j: i }
}
