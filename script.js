const inputTarefa = document.querySelector('.input_tarefas');
const btnTarefa = document.querySelector('.btn_add');
const tarefas = document.querySelector('.tarefas');
const btnDeleteAll = document.querySelector('.btn_header');

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
}

btnTarefa.addEventListener('click', ()=> {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e)=> {
    const elemento = e.target;

    if (elemento.classList.contains('btn_remove')) {
        elemento.parentElement.remove();
    }
});