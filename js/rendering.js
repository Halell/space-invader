'use strict'

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr class="row row-${i}">\n`
        for (var j = 0; j < board[0].length; j++) {
            var cellGameObj = ''
            var cellClass = ''                        // after creating scc class to seaport deferent class
            if (board[i][j].type !== SKY) {        //need to change cell ster to cell class
                cellClass += board[i][j].type
            } else if (board[i][j].gameObj) {
                cellGameObj += board[i][j].gameObj
            }
            strHTML += `\t<td title="${i}-${j}" class="cell cell-${i}-${j} ${cellClass}" >
                         ${cellGameObj} </td>\n`
        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    renderCell({ i: 12, j: gHero.pos }, HERO)
}


function renderCell(pos, gameObj = null) {
    gBoard[pos.i][pos.j].gameObj = gameObj
    var elCell = getElCell(pos)
    if (gameObj === HERO) elCell.style.color = 'yellow'
    if (gameObj === LASER) elCell.style.color = 'yellow'
    elCell.innerHTML = gameObj || ''
}

function getElCell(pos) {
    return document.querySelector(`.cell-${pos.i}-${pos.j}`)
}

function scoreUpdate() {
    if (gGame.isOn) gGame.aliensCount++
    var elScoreDisplay = document.querySelector('.score')
    elScoreDisplay.innerText = `${gGame.aliensCount}`
    if (gGame.aliensCount === gAliens.length * gAliens[0][0]) {
        gGame.state = 'victory'
        gameOver()
        return false
    }
    return true
}

function popMessage() {
    var elEndMessage = document.querySelector('.end-message')
    elEndMessage.innerText = `${gGame.state}`
    // elEndMessage.style.display = 'block'
}
