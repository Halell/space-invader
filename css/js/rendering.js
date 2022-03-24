'use strict'

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr class="row row-${i}">\n`
        for (var j = 0; j < board[0].length; j++) {
            var cellString = ''
            var cellClass = ''                        // after creating scc class to seaport deferent class
            if (board[i][j].type !== SKY) {        //need to change cell ster to cell class
                cellClass += board[i][j].type
            } else if (board[i][j].gameObj) {
                cellString += board[i][j].gameObj
            }
            strHTML += `\t<td title="${i}-${j}" class="cell cell-${i}-${j} ${cellClass}" >
                         ${cellString} </td>\n`
        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


function renderCell(pos, gameObj = null) {
    console.log(pos, gameObj)
    gBoard[pos.i][pos.j].gameObj = gameObj
    var elCell = getElCell(pos)
    elCell.innerHTML = gameObj || ''
}

function getElCell(pos) {
    return document.querySelector(`.cell-${pos.i}-${pos.j}`)
}