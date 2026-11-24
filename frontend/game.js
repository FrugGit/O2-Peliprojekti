const gridWidth = 20
const gridHeight = 15
const removedDataCenters = []
let gameOver = false
let dataCenterSpeed = 1.6
let currentShooterPosition = 280

const createGridOn = (parentID, width, height) => {
  const parentElement = document.getElementById(parentID);
  console.log(parentElement);
  const grid = document.createElement("div");
  grid.classList.add("grid");
//   grid.style.width = width + "px";
//   grid.style.height = height + "px"; //Näitä ei välttämättä tarvita nyt kun on jo tuolla CSS-tiedostossa nuo mitat
  parentElement.appendChild(grid);
  return grid;
};

const grid = createGridOn("game-container", 800, 600);

for (let i = 0; i < gridWidth * gridHeight; i++) {
    const square = document.createElement("div")
    grid.appendChild(square)
}


const squares = Array.from(document.querySelectorAll(".grid div"))

const dataCenters = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
]

function draw() {
    for (let i = 0; i < dataCenters.length; i++) {
        if (!removedDataCenters.includes(i)) { // voi muuttaa ehkä if (i in removedDataCenters)
            squares[dataCenters[i]].classList.add("datacenter")
        }
    }
}

draw()

function remove() {
    for (let i = 0; i < dataCenters.length; i++) {
        squares[dataCenters[i]].classList.remove("datacenter")
    }
}

const movePlayer = () => {
  // nuolinäppäinten painallusten eventit
    squares[currentShooterPosition].classList.remove("shooter")
  const move = (event) => {
    if (event.code === "ArrowLeft") {
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
      return "left";
    }
    if (event.code === "ArrowRight") {
      console.log("going right");
      return "right";
    }
  };
  // placeholder pelaajalle, sille pitää vielä tehdä oma "fyysinen" olemus
  const player = document.createElement("div");
  player.id = "game-player";
  document.addEventListener("keydown", move);
  return player;
};

// game loop täällä
const play = () => {
  // pelataan pelii
  const player = createPlayer();
  grid.appendChild(player);
};

play();
