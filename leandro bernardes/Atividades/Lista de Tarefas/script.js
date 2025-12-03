// Referência para o campo de input e a lista <ul>
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Função para adicionar uma nova tarefa
function addTask() {
    // 1. Pega o texto digitado e remove espaços em branco no início/fim
    const taskText = taskInput.value.trim();

    // 2. Verifica se o campo não está vazio
    if (taskText === '') {
        alert("Por favor, digite uma tarefa!");
        return; // Sai da função se estiver vazio
    }

    // 3. Cria o elemento <li> para a nova tarefa
    let li = document.createElement('li');
    li.innerHTML = taskText; // Define o texto da tarefa

    // 4. Cria o botão de remover (o 'X')
    let span = document.createElement('span');
    span.innerHTML = 'X'; // O texto do botão
    
    // Adiciona o botão 'X' dentro do <li>
    li.appendChild(span);

    // Adiciona o <li> à lista <ul>
    taskList.appendChild(li);

    // 5. Limpa o campo de input
    taskInput.value = '';

    // 6. Opcional: Salva a lista no navegador (LocalStorage)
    saveData(); 
}

// Adiciona eventos de clique na lista para Marcar/Remover
taskList.addEventListener('click', function(e) {
    // Se o clique foi em um item <li> (a tarefa)
    if (e.target.tagName === 'LI') {
        // Alterna a classe 'checked' (para riscar/desriscar)
        e.target.classList.toggle('checked');
        saveData(); // Salva a alteração
    } 
    // Se o clique foi no <span> (o botão 'X')
    else if (e.target.tagName === 'SPAN') {
        // Remove o elemento pai do <span>, que é o <li>
        e.target.parentElement.remove();
        saveData(); // Salva a alteração
    }
}, false); // O 'false' é padrão, mas é bom para deixar claro

// --- Funções para Salvar e Carregar a Lista no Navegador ---

// Salva o conteúdo da lista no LocalStorage do navegador
function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}

// Carrega a lista quando a página é aberta
function showTask() {
    // Pega o que foi salvo no LocalStorage
    taskList.innerHTML = localStorage.getItem('data');
}

// Chama a função para carregar as tarefas ao iniciar a página
showTask();

// Permite adicionar tarefa pressionando 'Enter' no campo de input
taskInput.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é 'Enter' (código 13 ou 'Enter')
    if (event.key === 'Enter') {
        addTask();
    }
});