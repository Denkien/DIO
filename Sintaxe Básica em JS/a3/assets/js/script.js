//oq são vetores e arrays

// declarando arrays:
let array = ['string', 1, true];
console.log(array);

let array2 = [array,"string", 1, false, ['ugabuga'], ['itens'], ['armas'], ['paz e amor']];
//console.log(array2[1]);


//array2.forEach(function(item, index){console.log("deu certo",index, item)});  //isso aí fez mandar o item e a posição no array

//array2.push(1); //poe um item a mais no final do array

//array2.pop(); //tira o ultimo do array


//array2.shift(); //tira o primeiro do array

//array2.unshift("abugabuga"); // poe um item no começo do array



// console.log(array2.indexOf('string')); //mostra qual a posição do item no array, mas não sei fazer com array no array ainda

//array2.splice(0,3); // deleta de x posição até y posição.

//let array3 = array2.slice(0,4); // seleciona uma fatia do array.

// console.log(array3);

let cestaDeFrutas = {string:'banana', number: 1, boolean: true, array: ["array","arraial"], cesta2:{melancia: "melancia"}};
/*
console.log(cestaDeFrutas);

var cestinha = cestaDeFrutas.cesta2;
console.log (cestinha);

var verdade = cestaDeFrutas.boolean;
console.log(verdade);

var array1 = cestaDeFrutas.array; //pra ir pegando oq vc quer de dentro do objeto
console.log(array1);
*/
var {string, number, boolean} = cestaDeFrutas; //pra pegar varias coisas q vc quer de dentro do objeto
console.log(string, number, boolean);