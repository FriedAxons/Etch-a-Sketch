// Set the initial grid size
let gridSize = 16;

// Get references to the container and reset button elements
const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

// Function to generate the grid
function generateGrid(numSquares) {
    // Clear the existing grid
    container.innerHTML = "";

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

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken the color by a given percentage
function darkenColor(color, percentage) {
    const factor = 1 - (percentage / 100) * 0.1; // Adjusting the factor
    const [r, g, b] = color
        .substring(color.indexOf("(") + 1, color.lastIndexOf(")"))
        .split(",")
        .map((value) => {
            const channelValue = parseInt(value.trim());
            return Math.max(0, Math.round(channelValue * factor)); // Ensuring value doesn't go below 0
        });
    return `rgb(${r}, ${g}, ${b})`;
}

// Add hover effect to the grid squares
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-square")) {
        const currentColor = event.target.style.backgroundColor;
        const randomColor = generateRandomColor();
        const darkenedColor = darkenColor(currentColor, 10);
        event.target.style.backgroundColor = randomColor;
        setTimeout(() => {
            event.target.style.backgroundColor = darkenedColor;
        }, 200);
    }
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    // Prompt the user to enter the number of squares per side
    let input = prompt("Enter the number of squares per side (1-100):");
    let numSquares = parseInt(input);

    // Check if the input is within the valid range
    if (numSquares >= 1 && numSquares <= 100) {
        gridSize = numSquares;
        generateGrid(gridSize);
    }
});

// Initial grid generation
generateGrid(gridSize);
