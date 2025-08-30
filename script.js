const container = document.getElementById("mainContainer");

for (let i=0; i<256; i++){
    const multiDivs = document.createElement('div');
    multiDivs.style.padding = "0px";
    multiDivs.style.margin = "0px";
    multiDivs.style.width = '45px';
    multiDivs.style.height = '45px';
    multiDivs.style.backgroundColor = "brown";
    multiDivs.classList.add("grid-style");
    multiDivs.addEventListener("mouseover", () => {multiDivs.style.backgroundColor = "black";})
    container.appendChild(multiDivs);
}

    mainButton.addEventListener("click", () => {
        container.innerHTML = "";
        const sizebaby = prompt("Enter Size");

        if (sizebaby>100){
            alert("Enter a number between 1-100");
        }
        else if (sizebaby<1){
            alert("Enter a number between 1-100");
        }
        else{
            for (let j=0; j<sizebaby*sizebaby; j++){
                const newGrid = document.createElement("div");
                const squareSize = 720/sizebaby;
                newGrid.style.padding = "0px";
                newGrid.style.margin = "0px";
                newGrid.style.width = squareSize + "px";
                newGrid.style.height = squareSize + "px";
                newGrid.style.backgroundColor= "brown";
                newGrid.classList.add("newGrid-style");
                newGrid.addEventListener("mouseover", () => {newGrid.style.backgroundColor = "black";})
                container.appendChild(newGrid)
            }
        }
        return;

    })
