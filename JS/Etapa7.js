const btnSendE7 = document.getElementById("btnInput")
btnSendE7.addEventListener("click", () => {
    let name = document.getElementById("nameInput").value;

    if(name === "") {
        alert("Insira um nome válido!");
    }

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let li = document.createElement("li");
    li.textContent = name;
    td1.appendChild(li);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    let btnRemove = document.createElement("button");
    btnRemove.addEventListener("click", () => {
        li.remove();
        td1.remove();
        td2.remove();
        btnRemove.remove();
    });
    td2.appendChild(btnRemove);
    tr.appendChild(td2);

    document.getElementById("LinhaAdd").appendChild(tr);

    document.getElementById("nameInput").value = "";
});