const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetGrid");
let selectedSize = 16;
let selectedColor = "black";



function generateGrid(size){

    let squareSize = gridContainer.clientWidth / size;
    console.log(squareSize);

    for(let i=0; i<size*size; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize+"px";
        square.style.height = squareSize+"px";

       square.addEventListener("mouseover", (e)=>{
        square.style.backgroundColor = selectedColor;
       });
        
        gridContainer.appendChild(square);
    }
}




sizeButton.addEventListener("click", (e)=>{
    const size = prompt("Please enter a grid size");
    const number = parseInt(size);

    if(number>=100){
        alert("Error! Must be less than 100");
    } else if(number<1){
        alert("Error number must be >0");
    } 
    
    else {
        gridContainer.innerHTML = '';
        selectedSize = number;
        generateGrid(number);
    }

    
});

resetButton.addEventListener("click", (e)=>{
    gridContainer.innerHTML = "";
    generateGrid(selectedSize);
});

generateGrid(selectedSize);