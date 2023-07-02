const container = document.getElementById("container");
const gridSize = 16;

// Create the grid
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

// Add hover effect to the grid squares
const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("hovered");
    });
});
