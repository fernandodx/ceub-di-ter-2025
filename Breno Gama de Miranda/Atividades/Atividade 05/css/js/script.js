// PASSO 1: Selecionar os elementos do DOM
const tarefaInput = document.getElementById('tarefaInput');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

let tasks = [];

// Carregar tarefas do localStorage
carregarTarefas();

// PASSO 2: Adicionar evento de clique no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarTarefa);

// Adicionar tarefa ao pressionar Enter
tarefaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    // Pegar o valor digitado no input e remover espaços extras
    const texto = tarefaInput.value.trim();
    
    // Se estiver vazio, não fazer nada
    if (texto === '') {
        return;
    }
    
    // Criar objeto da tarefa
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    
    // Adicionar à lista
    tasks.push(novaTarefa);
    
    // Salvar no localStorage
    salvarTarefas();
    
    // Atualizar a interface
    renderizarTarefas();
    
    // PASSO 7: Limpar o campo de texto e colocar foco
    tarefaInput.value = '';
    tarefaInput.focus();
}

function renderizarTarefas() {
    // Limpar lista atual
    listaTarefas.innerHTML = '';
    
    if (tasks.length === 0) {
        listaTarefas.innerHTML = `
            <div class="empty-state">
                <i>📝</i>
                <p>Nenhuma tarefa adicionada ainda</p>
            </div>
        `;
    } else {
        // PASSO 3: Criar elementos <li> dinamicamente para cada tarefa
        tasks.forEach(tarefa => {
            const li = document.createElement('li');
            
            // Adicionar classe se estiver concluída
            if (tarefa.concluida) {
                li.classList.add('concluida');
            }
            
            li.innerHTML = `
                <span class="tarefa-texto">${tarefa.texto}</span>
                <button class="btn-remover">✕</button>
            `;
            
            // PASSO 4: Adicionar evento para marcar como concluída
            const tarefaTexto = li.querySelector('.tarefa-texto');
            tarefaTexto.addEventListener('click', () => {
                toggleConcluida(tarefa.id);
            });
            
            // PASSO 5 e 6: Adicionar botão remover e seu evento
            const btnRemover = li.querySelector('.btn-remover');
            btnRemover.addEventListener('click', () => {
                removerTarefa(tarefa.id);
            });
            
            listaTarefas.appendChild(li);
        });
    }
    
    // Atualizar estatísticas
    atualizarEstatisticas();
}

function toggleConcluida(id) {
    // Encontrar a tarefa e alternar o estado de conclusão
    tasks = tasks.map(tarefa => {
        if (tarefa.id === id) {
            return { ...tarefa, concluida: !tarefa.concluida };
        }
        return tarefa;
    });
    
    salvarTarefas();
    renderizarTarefas();
}

function removerTarefa(id) {
    // Filtrar a tarefa a ser removida
    tasks = tasks.filter(tarefa => tarefa.id !== id);
    
    salvarTarefas();
    renderizarTarefas();
}

function atualizarEstatisticas() {
    const total = tasks.length;
    const concluidas = tasks.filter(tarefa => tarefa.concluida).length;
    
    totalTasks.textContent = `Total: ${total}`;
    completedTasks.textContent = `Concluídas: ${concluidas}`;
}

function salvarTarefas() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tasks');
    if (tarefasSalvas) {
        tasks = JSON.parse(tarefasSalvas);
        renderizarTarefas();
    }
}

// Inicializar estatísticas
atualizarEstatisticas();