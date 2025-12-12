window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");
  
    btnAdicionar.addEventListener("click", () => {
      const texto = input.value.trim();
  
      const li = this.document.createElement("li");
      li.textContent = texto;
  
      lista.appendChild(li);
    });
  };