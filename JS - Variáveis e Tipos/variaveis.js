//para variaveis: nomesTipoAssim
//para constantes: NOMES_TIPO_ASSIM

//let só funciona no bloco. var não, tipo:
/* 
var a = 1;
var b = 2;

if (a===1){
    var a = 11;
    let b = 22;

    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2
 */


//não da pra mandar um let bola = 1 e depois um let bola = 2. agora se for let bola = 1 e depois bola = 2, tudo bem.
var firstName = "jão";
var lastName = "sauro";


if(firstName === "jão"){
    var firstName = 'pedrin';
    let lastName = "chan";
}

console.log(firstName, lastName);

//ter variavel global é perigoso, melhor usar o let.

//constante = const. const não muda, é aquele valor pra sempre.

const CONSTANTE_1 = "constantine";

console.log (CONSTANTE_1);