
function validarChute(chute)
{
    const numero = parseInt(chute);
    if(numeroInvalido(numero))
    {
        elementoNumero.innerHTML +=` <div>Chute inválido, não é um número</div>`;
    }
    else if(foraDoIntervalo(numero))
    {
       elementoNumero.innerHTML += (`<div>Valor inválido: o número precisa estar entre 
        ${menorValor} e ${maiorValor}</div>`);
    }
    else if(numero === numeroAleatorio)
    {
        terminar(true);
    }
    else
    {
        elementoNumero.innerHTML+= numero < numeroAleatorio ? `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`:
        `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }

}

function numeroInvalido(numero) {
    return isNaN(numero);
}

function foraDoIntervalo(numero)
{
    return numero > maiorValor || numero < menorValor;
}

function terminar(valor)
{
    const h2 = document.createElement("h2");
    document.body.innerHTML = "";
    valor == true ? h2.textContent = "Parabéns, você acertou!" : h2.textContent = "Você optou por terminar o game!";
    document.body.append(h2);
    document.body.innerHTML += 
    `<h3>O número secreto era ${numeroAleatorio}.</h3>
    <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>`;
    recognition.continuous = false;
    recognition.stop();
    document.dispatchEvent(new CustomEvent("acertou-terminou"));
}