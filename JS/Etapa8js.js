let allLi = document.querySelectorAll("li");

for(let i =0; i < allLi.length; i++) {

    allLi[i].addEventListener("click", () => {
        console.log("Clicou no li: " + allLi[i].textContent);
    });

}

allLi.forEach((i) => {
    i.addEventListener("click", () => {
        console.log("Clicou no li: " + i.textContent);
    });
});