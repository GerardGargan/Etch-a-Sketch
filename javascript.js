const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".sizeButton");


function generateGrid(size){

    let squareSize = gridContainer.clientWidth / size;
    console.log(squareSize);

    for(let i=0; i<size*size; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize+"px";
        square.style.height = squareSize+"px";

        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "black";
        })
        
        gridContainer.appendChild(square);
    }
}

sizeButton.addEventListener("click", (e)=>{
    const size = prompt("Please enter a grid size");
    const number = parseInt(size);
    gridContainer.innerHTML = '';
    generateGrid(number);
});

generateGrid(16);