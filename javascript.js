// Create 16x16 divs inside container
let gridDivs = [];
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    gridDivs.push(div);
}

const divClass = "background-color: brown;";

//Append created divs to container
// And add event listeners to each
const containerDiv = document.querySelector(".container");
gridDivs.forEach(
    (div) => {
        containerDiv.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.classList.add('hover');
        })
    }
)

function createNewGrid(e) {
    const gridCount = prompt("Enter a number for each side of the grid");
    console.log(gridCount);
}

newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", createNewGrid);