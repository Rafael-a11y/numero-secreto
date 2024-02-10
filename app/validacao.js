function validarChute(chute)
{
    const numero = +chute;
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
        elementoNumero.innerHTML += `<div>Parabéns, você acertou, o número secreto é: ${numeroAleatorio}.</div>`
    }

}

function numeroInvalido(numero) {
    return isNaN(numero);
}

function foraDoIntervalo(numero)
{
    return numero > maiorValor || numero < menorValor;
}