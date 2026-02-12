
function createSqGrid(gridWidth, containerDiv) {
    let gridSqrs = [];
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const sqr = document.createElement("div");
        gridSqrs.push(sqr);
    }
    // return gridSqrs;
    const contWidth = containerDiv.style.width;
    gridSqrs.forEach(
        (div) => {
            div.style.height = `${contWidth / gridWidth}px`;//Modify dimensions of new grid square
            div.style.width = `${contWidth / gridWidth}px`;
            containerDiv.appendChild(div);
        }
    )
    return gridSqrs;
}


const containerDiv = document.querySelector(".container");
containerDiv.style.width = "480px", containerDiv.style.height = "480px";

let gridDivs = createSqGrid(16, containerDiv); // Initialize grid to 16x16 size

//Add listener on container and delegate to children
containerDiv.addEventListener("mouseover", e => {
    //Random rgb color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
})


function createNewGrid(e) {
    const gridCount = Number(prompt("Enter a number for each side of the grid. (Max 100)"));
    // console.log(gridCount);
    if (gridCount > 100 || isNaN(gridCount)) {
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
        }
    )
}

newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", createNewGrid);