// Code: JavaScript
//.lenght --> retorna o número de elementos de um array
//nomeDaLista.length - 1 para acessar o último elemento.
let lisatDeNumerosSorteados = []; //array vazio --> array é uma lista de elementos(em JavaScript usando colchetes [] e como acessar seus elementos através de índices, que começam em zero.)
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});//o responsiveVoice = fala o texto
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela( 'p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //array 
    let quantidadeDeElementosNaLista = lisatDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        lisatDeNumerosSorteados = [];
    }
   if (lisatDeNumerosSorteados.includes(numeroEscolhido)) { 
       return gerarNumeroAleatorio();
   } else {
       lisatDeNumerosSorteados.push(numeroEscolhido); //push adiciona um elemento(item) ao final do array(lista)
       return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}