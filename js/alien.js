'use strict'


const ALIEN_SPEED = 500
var gIntervalAliens




// The following two variables represent the part of the matrix (some rows)
// that we should shift (left, right, and bottom)
// We need to update those when:
// (1) shifting down and (2) last alien was cleared from row
var gAliensTopRowIdx = 1
var gAliensBottomRowIdx = 4
var gIsAlienFreeze = true
// function createAliens(board) {}

function handleAlienHit(pos) { }
function shiftBoardRight(board, fromI, toI) { }
function shiftBoardLeft(board, fromI, toI) { }
function shiftBoardDown(board, fromI, toI) { }
// runs the interval for moving aliens side to side and down
// it re-renders the board every time
// when the aliens are reaching the hero row - interval stops
function moveAliens() { }

function checkAlienRows(idx, isGoingRt, isTop = true) {
    var isAlien = false
    var i = (isGoingRt) ? 1 : gBoard.length - 2
    var initialI = i
    // console.log(i)
    while (!isAlien) {
        if (gBoard[idx][i].gameObj) isAlien = true            // what when cell obj is lazar?
        else i += (isGoingRt) ? 1 : -1
        if (isGoingRt && i === gBoard.length - 1) {
            idx += (isTop) ? -1 : 1
            i = initialI
            console.log('index change to', idx, 'i is', i)
        } else if (!isGoingRt && i === 1) {
            idx--
            i = initialI
        }
        console.log(i)
        if (idx === 0 || idx === gBoard.length - 2) console.log('victory')
        console.log('end loop')
    }
    return { i: idx, j: i }
}


