 
const menorValor = 1;
const maiorValor = 10;
const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor =  document.querySelector("#maior-valor");
const numeroAleatorio = gerarNumeroAleatorio();
elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;


function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * maiorValor + 1);
}
console.log("Número secreto:",numeroAleatorio);