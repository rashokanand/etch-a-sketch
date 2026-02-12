// Create 16x16 divs inside container
let gridDivs = [];
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    gridDivs.push(div);
}


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
    const gridCount = Number(prompt("Enter a number for each side of the grid. (Max 100)"));
    // console.log(gridCount);
    if (gridCount >= 100 || isNaN(gridCount)) {
        alert("Your input is invalid. Please try again.");
        return 0;
    }
    // recreate grid
    gridDivs.forEach(
        (div) => div.remove()
    );
    
    gridDivs = [];
    for (let i = 0; i < gridCount * gridCount; i++) {
        const div = document.createElement("div");
        gridDivs.push(div);
    }

    gridDivs.forEach(
        (div) => {
            div.style.height = `${480 / gridCount}px`;//Modify dimensions of new grid square
            div.style.width = `${480 / gridCount}px`;
            containerDiv.appendChild(div);
            div.addEventListener("mouseenter", () => {
                div.classList.add('hover');
            })
        }
    )
    // console.log(gridDivs);

}

newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", createNewGrid);