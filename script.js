const inputTarefa = document.querySelector('.input_tarefas');
const btnTarefa = document.querySelector('.btn_add');
const tarefas = document.querySelector('.tarefas');

function criaDiv() {
    const div = document.createElement('div');
    return div;
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e)=> {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
}

function criaTarefa(textoInput) {
    const div = criaDiv();
    div.classList.add('div_li')
    const li = criaLi();
    li.innerText = textoInput;
    const botao = document.createElement("button");
    botao.innerText = 'apagar';
    botao.classList.add('btn_remove');
    tarefas.appendChild(div);
    div.appendChild(li);
    div.appendChild(botao);
    limpaInput();
    salvarTarefa();
}

btnTarefa.addEventListener('click', ()=> {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e)=> {
    const elemento = e.target;

    if (elemento.classList.contains('btn_remove')) {
        elemento.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();