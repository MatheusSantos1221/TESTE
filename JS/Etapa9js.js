let CountforP = 0;

const btnSEND = document.getElementById("btnSEND");
btnSEND.addEventListener("click", () => {
    let valueInput = document.getElementById("valueInput").value;

    let newLI = document.createElement("li");
    newLI.textContent = valueInput;
    newLI.addEventListener("click", () => {
        if(newLI.style.backgroundColor === "")
        {
            newLI.style.backgroundColor = "red";
            CountforP++;
        }
        else {
            newLI.style.backgroundColor = "";
            CountforP--;
        }

        document.getElementById("CountP").textContent = "SELECIONADOS: " + CountforP;

    });

    let newBtnREMOVE = document.createElement("button");
    newBtnREMOVE.textContent = "REMOVE";
    newBtnREMOVE.addEventListener("click", () => {
        newLI.remove();
    })

    newLI.appendChild(newBtnREMOVE);
    document.getElementById("listaTarefas").appendChild(newLI);



});
    

const btnREMOVESELECT = document.getElementById("btnREMOVESELECT");
btnREMOVESELECT.addEventListener("click", () => {
    let allLI = document.querySelectorAll("li");
    allLI.forEach((i) => {
        if(i.style.backgroundColor === "red")
        {
            i.remove();
            CountforP = 0;
            document.getElementById("CountP").textContent = "SELECIONADOS: " + CountforP;
        }
    });
});


const btnREMOVEALL = document.getElementById("btnREMOVEALL");
btnREMOVEALL.addEventListener("click", () => {
    let AallLI = document.querySelectorAll("li");
    AallLI.forEach((i) => {
        CountforP = 0;
        i.remove();

        document.getElementById("CountP").textContent = "SELECIONADOS: " + CountforP;
    });
});