'use strict'

const LASER_SPEED = 80
var gLaserInterval
var gHero = { pos: 1, isShoot: false }


function moveHero(dir) {

    gBoard[12][gHero.pos].gameObj = null

    renderCell({ i: 12, j: gHero.pos }, null)

    gHero.pos += (dir === 1) ? 1 : - 1
    gBoard[12][gHero.pos].gameObj = HERO

    renderCell({ i: 12, j: gHero.pos }, HERO)
}

function shoot(shootingPos) {
    gHero.isShoot = true

    var pos = { i: 11, j: shootingPos }
    gBoard[pos.i][pos.j].gameObj = LASER
    renderCell(pos, LASER)

    gLaserInterval = setInterval(() => {
        gBoard[pos.i][pos.j].gameObj = null
        renderCell(pos)
        if (gBoard[pos.i - 1][pos.j].gameObj) {
            if (gBoard[pos.i - 1][pos.j].gameObj === ALIEN) {
                gBoard[pos.i - 1][pos.j].gameObj = null
                pos.i--
                renderCell(pos)
            }
            gLaserInterval = clearInterval(gLaserInterval)
            gHero.isShoot = false
            return
        }
        pos.i--
        gBoard[pos.i][pos.j].gameObj = LASER
        renderCell(pos, LASER)
    }, LASER_SPEED)
}
