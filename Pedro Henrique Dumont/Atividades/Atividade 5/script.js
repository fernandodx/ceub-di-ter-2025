// PASSO 1: Selecionar os elementos do DOM
const input = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

// PASSO 2: Evento de clique no botão "Adicionar"
btnAdicionar.addEventListener("click", adicionarTarefa);

// Também permite adicionar com a tecla Enter
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const textoTarefa = input.value.trim();
  if (textoTarefa === "") return;

  // PASSO 3: Criar o <li> e adicionar texto
  const li = document.createElement("li");
  li.textContent = textoTarefa;

  // PASSO 4: Marcar como concluída
  li.addEventListener("click", function() {
    li.classList.toggle("concluida");
  });

  // PASSO 5: Criar botão remover
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.addEventListener("click", function(event) {
    event.stopPropagation(); // impede o clique no li
    li.remove();
  });

  // PASSO 6: Anexar botão ao li
  li.appendChild(botaoRemover);

  // Adicionar li à lista
  lista.appendChild(li);

  // PASSO 7: Limpar campo e focar
  input.value = "";
  input.focus();
}
