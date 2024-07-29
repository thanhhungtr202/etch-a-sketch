const defaultGrid = 10;
const outDiv = document.querySelector(".centerContainer");
const newGridButton = document.querySelector(".newGridButton");



let gridContainer;


//Create grid
let createGrid = (numberOfDiv) => {
    let divSize = 640 / numberOfDiv;
    for(let j = 0; j < numberOfDiv; j++){
        for(let i = 0; i < numberOfDiv; i++){
            let newDiv = document.createElement("div");
            newDiv.style.width = divSize + "px";
            newDiv.style.height = divSize + "px";
            newDiv.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "red";
            })
            gridContainer.appendChild(newDiv);
        }
    }
}

newGridButton.addEventListener("click", ()=> {
    //Resetting grid
    //created Element persist changes made to it

    //Empty container
    outDiv.innerHTML = '';

    //Create new container
    let divContainer = document.createElement("div");
    divContainer.classList.add("container");
    outDiv.appendChild(divContainer);

    //Selecting new container
    gridContainer = document.querySelector(".container");

    let newNumberOfDiv = 120;
    while(newNumberOfDiv > 100){
        newNumberOfDiv = parseInt(prompt("Please enter your grid size: "));
    }
    console.log(newNumberOfDiv);
    createGrid(newNumberOfDiv);
})

