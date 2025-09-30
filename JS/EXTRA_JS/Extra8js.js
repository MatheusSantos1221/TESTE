let selectLI = document.querySelectorAll("li");

for (let i = 0; i < selectLI.length; i++) {
    console.log("Usando For para acessar: " + selectLI[i].textContent);
}

selectLI.forEach((i) => {
    i.addEventListener("click", () => {
        console.log("Usando forEach para acessar: " + i.textContent);
        i.style.color = "red";
    });
})