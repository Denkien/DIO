var jogador1 = 0;
var jogador2 = 1;
var placar;

//if ternario, checa as coisas como se fosse uma pergunta com o "?", então depois do ? vai oq fazer se estiver tudo certo, e se tiver algo errado, aí vai depois do ":".
/*
jogador1 > -1 && jogador2 > -1 ? console.log("jogadores válidos.") : console.log("jogadores inválidos.");

    if(jogador1>0 && jogador2 ==0){
        placar = jogador1>jogador2;
        console.log('Jogador 1 marcou um ponto!'); 
        
    }else if(jogador2>0 && jogador1 == 0){
        placar = jogador2>jogador1;
        console.log('Jogador 2 marcou um ponto!');
    }else{
        console.log("Ninguém marcou ponto");
}

// switch bem bom tbm pra condicional
switch(placar){
    case placar = jogador1>jogador2:
    console.log("jogador 1 ganhou");
    break;    
    case placar = jogador2>jogador1:
    console.log("jogador 2 ganhou");
    break;
    default:
        console.log("ninguém ganhou.");
}

*/

/*
let array =['valor1','valor2','valor3','valor4','valor5','valor6'];

let objeto = {prop1: "valor1", prop2:"valor2",prop3:"valor3",}; 
 
for (let indice = 0; indice< array.length; indice++){
    console.log(indice);
}

//for in ~  funciona tanto em array qto em objeto
for (let i in array){
    console.log(i);
}//aqui contou o tanto de slots q nem no array

for (i in objeto){
    console.log(i);
}//aqui mostrou os props do objeto, tipo prop 1 etc

//for of~
for(i of array){
    console.log(i)
}//aqui já mostrou o conteudo do array, valor1, valor2, etc.

for(i of objeto.prop1){
    console.log(i);
}//com objeto cru n tem como, mas da pra selecionar a propriedade dele, tipo aí q peguei prop1. o resultado foi "v a l o r 1" soletrado.


*/
var a = 0;

while (a<10){
    a=a+1;
    console.log(a);
}

a=0;

do{
    a++
    console.log(a)
}while(a<10);