const gridContainer = document.querySelector(".grid-container");


function generateGrid(size){

    let squareSize = gridContainer.clientWidth / size;
    console.log(squareSize);

    for(let i=0; i<size*size; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize+"px";
        square.style.height = squareSize+"px";
        
        gridContainer.appendChild(square);
    }
}

generateGrid(10);