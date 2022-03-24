'use strict'

const BOARD_SIZE = 14
const ALIENS_ROW_LENGTH = 8
const ALIENS_ROW_COUNT = 3
const HERO = '♆'
const ALIEN = '👽'
const LASER = '⤊'

var gBoard
var gGame = {
    isOn: false,
    aliensCount: 0
}

// Called when game loads
function init() {
    gBoard = createBoard()
    renderBoard(gBoard)
}

// Handle game keys
function onKeyDown(ev) {

    switch (ev.key) {
        case 'ArrowLeft':
            if (gHero.pos === 1) return
            moveHero(- 1)
            break
        case 'ArrowRight':
            if (gHero.pos === 12) return
            moveHero(1)
            break
        case ' ':
            if (gHero.isShoot) return
            shoot(gHero.pos)
            break
    }
}


