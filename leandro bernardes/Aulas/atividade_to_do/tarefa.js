window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");
  
    btnAdicionar.addEventListener("click", () => {
      //recuperar o valor do campo
      const texto = input.value.trim();
  
      //criar um elemento da minha lista
      const li = this.document.createElement("li");

      //adicionar o valor do input no meu item de lista
      li.textContent = texto;

        li.addEventListener("click", () => {
            li.classList.toggle("concluida")
        })

      //criar um botão de excluir
      const btnRemover = this.document.createElement("button")
      btnRemover.textContent = "X";
      btnRemover.style.marginLeft = "10px";
      btnRemover.classList.add("fechar");
      btnRemover.addEventListener("click", (event) => {
        //Deletar o item
        li.remove();
      });
  
      //adiciona o item na lista
      lista.appendChild(li);
      //Adicionar o borão de remover
      li.appendChild(btnRemover)
      //limpa o input
      input.value = "";
    });
  };