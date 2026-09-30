const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(squaresPerSide) {
  
    container.innerHTML = "";

    const squareSize = 960 / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#1FFF5E";
        });

        container.appendChild(square);
    }
}

resetBtn.addEventListener("click", () => {
    let userInput = prompt("Enter grid size Max 100");

    if (userInput === null) return; 

    let size = parseInt(userInput);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("enter 1 to 100");
    } else {
        createGrid(size);
    }
});

createGrid(16);