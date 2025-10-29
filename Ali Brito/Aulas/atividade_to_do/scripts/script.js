window.onload = function () {
    const input = document.getElementById("tarefaInput")
    const btnAdicionar = document.getElementById("btnAdicionar")
    const lista = document.getElementById("listaTarefas")

    btnAdicionar.addEventListener("click", () => {
        const texto = input.value.trim();

        const li = document.createElement("li");

        const btnRemover = document.createElement("button")
        btnRemover.textContent = "X"
        btnRemover.style.marginLeft = "10px";
        btnRemover.classList.add("fechar")
        btnRemover.addEventListener("click", (event) => {
            li.remove();
        });

        li.textContent = texto;
        lista.appendChild(li);
        li.appendChild(btnRemover)

        input.value = ""

    })
};

