const createGridOn = (parentID, width, height) => {
  const parentElement = document.getElementById(parentID);
  console.log(parentElement);
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.width = width + "px";
  grid.style.height = height + "px";
  parentElement.appendChild(grid);
  return grid;
};

const createPlayer = () => {
  // nuolinäppäinten painallusten eventit, nämä pitää saada liikuttamaan pelaajaa
  const move = (event) => {
    if (event.code === "ArrowLeft") {
      console.log("going left");
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
  const grid = createGridOn("game-container", 800, 600);
  const player = createPlayer();
  grid.appendChild(player);
};

play();
