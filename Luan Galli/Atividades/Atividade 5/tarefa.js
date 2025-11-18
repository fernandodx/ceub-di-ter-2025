window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");
  
    btnAdicionar.addEventListener("click", () => {
      
      //recuperar o valor do campo text pelo value
      const texto = input.value.trim();
  
      //criar elemento da lista
      const li = this.document.createElement("li");
      
      //adicionar o valor do input no meu item de lista
      li.textContent = texto;
      li.addEventListener("click", () =>{
         li.classList.toggle("concluida");

      });
  
      //Criar um botão de excluir
      const btnremover = this.document.createElement("button")
      btnremover.textContent = "X"
      btnremover.style.marginLeft = "10px"
      btnremover.addEventListener("click", (event) => {

        //Deletar o item
        li.remove();
      });

      //adiciona o item na lista
      lista.appendChild(li);

      //adicionar o botão remover
      li.appendChild(btnremover)

      //limpa o input
      input.value = "";
    });
  };