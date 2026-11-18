const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

// Pelin sisäinen resoluutio:
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

// Peli-ikkunan skaalautuvuuden funktio:
function resizeGameWindow() {
  const scaleX = window.innerWidth / GAME_WIDTH;
  const scaleY = window.innerHeight / GAME_HEIGHT;
  const scale = Math.min(scaleX, scaleY, 1); // Remove ", 1" to allow upscaling

  canvas.style.width = `${GAME_WIDTH * scale}px`;
  canvas.style.height = `${GAME_HEIGHT * scale}px`;
}

// Tällä ylempi resize ajetaan aina sivun avautuessa ja kun selainikkunan kokoa muutetaan
window.addEventListener("resize", resizeGameWindow);
resizeGameWindow();
