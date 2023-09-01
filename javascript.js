const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetGrid");
const colorButton = document.querySelector(".colorSwitch");
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
        if(selectedColor=="black"){
            square.style.backgroundColor = selectedColor;
        }
         else {
            square.style.backgroundColor = randColor();
         }
       });
        
        gridContainer.appendChild(square);
    }
}

colorButton.addEventListener("click", (e)=>{
    if(selectedColor=="black"){
        selectedColor="Random";
        colorButton.textContent = "Black";
    } else {
        selectedColor="black";
        colorButton.textContent = "Random colours";
    }
})

function randColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
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