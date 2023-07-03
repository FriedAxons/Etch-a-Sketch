// Set the initial grid size
let gridSize = 16;

// Get references to the container and reset button elements
const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

// Function to generate the grid
function generateGrid(numSquares) {
    // Set the grid template columns and rows based on the number of squares
    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

    // Generate grid squares
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

// Add hover effect to the grid squares
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-square")) {
        event.target.classList.add("hovered");
    }
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    // Prompt the user to enter the number of squares per side
    let input = prompt("Enter the number of squares per side (1-100):");
    let numSquares = parseInt(input);

    // Check if the input is within the valid range
    if (numSquares >= 1 && numSquares <= 100) {
        // Clear the existing grid
        container.innerHTML = "";

        // Generate a new grid with the specified number of squares
        generateGrid(numSquares);
    }
});

// Initial grid generation
generateGrid(gridSize);
