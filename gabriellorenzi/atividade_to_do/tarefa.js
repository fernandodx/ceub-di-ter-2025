window.onload = function (){
  const input = this.document.getElementById("tarefaInput");  
  const btnAdicionar = this.document.getElementById("btnAdicionar");
  const lista = this.document.getElementById("ListaTarefas")

  btnAdicionar.addEventListener("click", () =>{
    const texto = input.value.trim();

    const li = this.document.createElement("li");
    li.textContent = texto;

    

    //Criar um botão de excluir
    const btnRemover = this.document.createElement("button");
    btnRemover.textContent = "X";
    btnRemover.style.marginLeft = "10px";
    btnRemover.classList.add("fechar");
    btnRemover.addEventListener("click", (event) => {
      //Deletar o item
      li.remove();
    });

    const btnConcluido = this.document.createElement("button");
    btnConcluido.textContent = "✓";
    btnConcluido.style.marginLeft = "10px";
  btnConcluido.classList.add("concluido");
    btnConcluido.addEventListener("click", (event) => {
      //Deletar o item
      li.classList.toggle("concluida");
    });

   
    lista.appendChild(li);
    li.appendChild(btnRemover);
    li.appendChild(btnConcluido);

    input.value = " ";

  })
};