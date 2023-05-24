const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll("[data-controle]");

const estatisticas = document.querySelectorAll("[data-estatistica]");

const robotron = document.querySelector("#robotron");

const listaRobos = ['img/robotron.png', 'img/Robotron 2000 - Azul.png', 'img/Robotron 2000 - Branco.png', 'img/Robotron 2000 - Preto.png', 'img/Robotron 2000 - Rosa.png', 'img/Robotron 2000 - Vermelho.png']

function manipulaDados (operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach( (elemento) => {
        if(operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })
}


let aux = 1;
robotron.addEventListener("click", (element) => {
    element.target.src = listaRobos[aux];
    aux++;
    if(aux >= listaRobos.length){
        aux=0;
    }
})