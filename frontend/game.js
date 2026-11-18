

// Pelin "kanvaasi", alue johon se rajataan
// Koko on muutettavissa vielä

function startGame() {
    myGameArea.start();
}
const myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
};

startGame()