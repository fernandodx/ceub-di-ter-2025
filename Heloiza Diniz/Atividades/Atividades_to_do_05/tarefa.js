window.onload = function(){

    console.log("oi")
    const input = document.getElementById("tarefaInput");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista =document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
        const texto = input.value.trim();

        const li = document.createElement("li");
        li.textContent = texto;

        lista.appendChild(li);

    });
}