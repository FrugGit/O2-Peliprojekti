const gridWidth = 20
const gridHeight = 15
const removedDataCenters = []
let gameOver = false
let dataCenterSpeed = 1.6
let currentPlayerPosition = 280

const createGridOn = (parentID) => {
  const parentElement = document.getElementById(parentID);
  console.log(parentElement);
  const grid = document.createElement("div");
  grid.classList.add("grid");
//   grid.style.width = width + "px";
//   grid.style.height = height + "px"; //Näitä ei välttämättä tarvita nyt kun on jo tuolla CSS-tiedostossa nuo mitat
  parentElement.appendChild(grid);
  return grid;
};

const grid = createGridOn("game-container");

//luo gridin sisään gridin palikat
for (let i = 0; i < gridWidth * gridHeight; i++) {
    const square = document.createElement("div")
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll(".grid div"))

const dataCenters = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
]

function draw() {
    for (let i = 0; i < dataCenters.length; i++) {
        if (!removedDataCenters.includes(i)) { // voi muuttaa ehkä if (i in removedDataCenters)
            squares[dataCenters[i]].classList.add("datacenter")
        }
    }
}

draw()

// poistaa datacenterin omasta ruudustaan jotta se voi joko siirtyä seuraavaan tai pois pelistä
function remove() {
    for (let i = 0; i < dataCenters.length; i++) {
        squares[dataCenters[i]].classList.remove("datacenter")
    }
}

const movePlayer = () => {
  // nuolinäppäinten painallusten eventit täällä
    squares[currentPlayerPosition].classList.remove("shooter")
    switch (e.key) {
        case "ArrowLeft":
            if (currentPlayerPosition % width !== 0) currentPlayerPosition -= 1
            break
        case "ArrowRight":
            if (currentPlayerPosition % width < width - 1) currentPlayerPosition += 1
            break
    }
    squares[currentPlayerPosition].classList.add("shooter")

};

//kuinka usein ammus lähtee pelaajasta:
setInterval(shoot, 500)

//ampumisen funktio
function shoot() {
    let gunShot
    let currentShotPosition = currentPlayerPosition

    function moveShooter() {
        squares[currentShotPosition].classList.remove("bullet")
        currentShotPosition -= width

        if (currentShotPosition < 0) {
            clearInterval(gunShot)
            return
        }

        squares[currentShotPosition].classList.add("bullet")

        if (squares[currentShotPosition].classList.contains("invader")) {
            squares[currentShotPosition].classList.remove("bullet")
            squares[currentShotPosition].classList.remove("invader")
            squares[currentShotPosition].classList.add("boom")

            setTimeout(() => squares[currentShotPosition].classList.remove("boom"), 300)
            clearInterval(gunShot)

            const alienRemoved = alienInvaders.indexOf(currentShotPosition)
            aliensRemoved.push(alienRemoved)
            results++
            resultDisplay.innerHTML = results
        }
    }
    gunShot = setInterval(moveShooter, 100)
}


