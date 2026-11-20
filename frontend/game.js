const createCanvasOn = (parentID, width, height) => {
    const parentElement = document.getElementById(parentID);
    const canvas = document.createElement("canvas");
    canvas.width = width
    canvas.height = height
    parentElement.appendChild(canvas);
    return canvas
};

const createPlayer = () => {
    // nuolinäppäinten painallusten eventit, nämä pitää saada liikuttamaan pelaajaa
    const move = (event) => {
    if (event.code === 'ArrowLeft') {
        console.log('going left')
        return 'left'
    }
    if (event.code === 'ArrowRight') {
        console.log('going right')
        return 'right'
    }
    }
  // placeholder pelaajalle, sille pitää vielä tehdä oma "fyysinen" olemus
    const player = document.createElement('div')
    player.id = "game-player"
    document.addEventListener('keydown', move)
    return player
}

// game loop täällä
const play = () => {
    // pelataan pelii
    const canvas = createCanvasOn(
        "game-container",
        800,
        600
    )
    const context = canvas.getContext('2d') // tätä pitää jossain vielä referoida?
    const player = createPlayer()
    canvas.appendChild(player)
}

play()

