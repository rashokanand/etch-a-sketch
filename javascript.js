// Create 16x16 divs inside container
let gridDivs = [];
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    gridDivs.push(div);
}

//Append created divs to container
const containerDiv = document.querySelector(".container");
gridDivs.forEach(
    (div) => {
        containerDiv.appendChild(div);
    }
)