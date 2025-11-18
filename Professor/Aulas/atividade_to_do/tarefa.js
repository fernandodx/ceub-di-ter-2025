window.onload = function () {
  const input = this.document.getElementById("tarefaInput");
  const btnAdicionar = this.document.getElementById("btnAdicionar");
  const lista = this.document.getElementById("listaTarefas");

  btnAdicionar.addEventListener("click", () => {
    //recuperar o valor do campo text
    const texto = input.value.trim();

    //Criar um elemento da minha lista
    const li = this.document.createElement("li");
    //Adicionar o valor do input no meu item de lista
    li.textContent = texto;

    li.addEventListener("click", () => {
      li.classList.toggle("concluida");
    });

    //Criar um botão de excluir
    const btnRemover = this.document.createElement("button");
    btnRemover.textContent = "X";
    btnRemover.style.marginLeft = "10px";
    btnRemover.classList.add("fechar");
    btnRemover.addEventListener("click", (event) => {
      //Deletar o item
      li.remove();
    });

    //adiciona o item na lista
    lista.appendChild(li);
    //Adicione o botão remover
    li.appendChild(btnRemover);
    //Limpa o input
    input.value = "";
  });
};
