let treasureX, treasureY;
let attempts = 0;

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener("click", checkCell);
      grid.appendChild(cell);
    }
  }
}

function startGame() {
  treasureX = Math.floor(Math.random() * 3);
  treasureY = Math.floor(Math.random() * 3);
  attempts = 0;
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("message").textContent = "Tap the squares to find the treasure!";
  createGrid();
}

function checkCell(e) {
  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);
  attempts++;
  document.getElementById("attempts").textContent = "Attempts: " + attempts;

  if (x === treasureX && y === treasureY) {
    e.target.textContent = "💎";
    document.getElementById("message").textContent = "🎉 You found it!";
  } else {
    e.target.textContent = "❌";
  }
}

startGame();
