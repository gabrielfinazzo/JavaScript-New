let elementoResultado = document.querySelector ('.js-resultado');
let botoesPadroes= document.querySelectorAll ('.js-btn-padroes');
let botaoResultado = document.querySelector ('.js-btn-igual');
let botaoAC = document.querySelector ('.js-btn-ac');
let botaoMaisMenos = document.querySelector ('.js-btn-mais-menos');
let botaoDeletar = document.querySelector ('.js-btn-del');

botoesPadroes.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener('click', () => {
        let valorDoElementoClicado = elementoCorrente.dataset.valor
    })
})


