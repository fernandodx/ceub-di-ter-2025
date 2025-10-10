var campoTarefa = document.getElementById("tarefaInput");
var botaoAdicionar = document.getElementById("btnAdicionar");
var listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener('click', () => {
  var valorInput = campoTarefa.value.trim();

  if (valorInput === "") {
    alert("Tarefa não pode ser vazia!");
    return;
  }

  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = valorInput;

  // Cria o botão "X"
  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";

  // Evento para remover a tarefa
  botaoRemover.addEventListener('click', () => {
    novaTarefa.remove(); // Remove apenas essa tarefa
  });

  // Adiciona o botão ao <li>
  novaTarefa.appendChild(botaoRemover);

  // Adiciona o <li> à lista
  listaTarefas.appendChild(novaTarefa);

  // Limpa o campo e foca de volta
  campoTarefa.value = "";
  campoTarefa.focus();
});

// Concluir uma tarefa ao clicar no <li> (sem ser no botão "X")
listaTarefas.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'LI') {
    evento.target.classList.toggle('concluida');
  }
});
