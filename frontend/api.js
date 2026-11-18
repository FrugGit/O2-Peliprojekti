const result = document.querySelector("#result");

fetch("http://127.0.0.1:5000/api/test")
  .then((response) => response.json())
  .then((data) => {
    result.textContent = data.message;
  })
  .catch((error) => {
    console.error("Error", error);
    result.textContent = "Could not connect to server";
  });
