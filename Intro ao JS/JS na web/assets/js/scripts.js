var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


/*

~ pra fazer depois ~

Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.

https://github.com/stebsnusch/basecamp-javascript/tree/main/introducao-ao-javascript/to-do%20list

*/