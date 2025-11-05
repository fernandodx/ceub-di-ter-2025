window.onload = function(){
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listatarefas");

    btnAdicionar.addEventListener("click", () =>{
        const texto = input.value.trim();

        const li = documente.createElement("li");
        li.textContent = texto;

        lista.appendChild(li);
    });
};