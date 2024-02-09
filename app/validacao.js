function validarChute(chute)
{
    const numero = +chute;
    if(numeroInvalido(numero))
    {
        console.log("Chute inválido");
    }
    if(foraDoIntervalo(numero))
    {
        console.log(`Valor fora do intervalo permitido, o número precisa estar entre 
        ${menorValor} e ${maiorValor}`);
    }
}

function numeroInvalido(numero) {
    return isNaN(numero);
}

function foraDoIntervalo(numero)
{
    return numero > maiorValor || numero < menorValor;
}