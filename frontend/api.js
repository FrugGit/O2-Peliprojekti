const result = document.querySelector("#result");

//  Hakee palvelimelle tallennetut pisteet
function loadScores() {
  fetch("http://127.0.0.1:5000/api/scores")
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = data
        .map((player) => `<p>${player.name}: ${player.score}</p>`)
        .join("");
    })
    .catch((error) => {
      console.error("Error", error);
      result.textContent = "Could not connect to server";
    });
}

// Tallentaa pelaajan pisteet palvelimelle
function saveScore(name, score) {
  const player = {
    name: name,
    score: score,
  };
  fetch("http://127.0.0.1:5000/api/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to save score");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      loadScores();
    })
    .catch((error) => {
      console.error("Error saving score:", error);
    });
}

// Hakee pisteet sivun avautuessa
loadScores();
