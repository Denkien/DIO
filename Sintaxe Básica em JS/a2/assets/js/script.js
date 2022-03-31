//tipos primitivos

//booleanos
var  a = false;
console.log(typeof(a));

//number

var b = 1;
console.log(typeof(b));

//string

var c = "nome"
console.log(typeof(c));

// var e let não precisam ter valor. const precisa e n pode ser mudado.

//diferença de var e let:

var eGlobal = 'global';
console.log (eGlobal);

function eLocal(){
    let eLocalInterno = 'local';
    console.log(eLocalInterno); //se o console.log não estiver dentro da função, ele não acha o let/var criado nela.
}

function eChurubin(){
    var churubin = 5;
    console.log(churubin);
}

eLocal();
eChurubin();

// = atribui, == é pra ver se é igual independente do tipo. === é idêntico.

var d = 0 == "0";
console.log (d);

var e = 0 === "0";
console.log(e);

var add = 1+1;
console.log (add)

var sub = 1-1;
console.log (sub);

var multi = 2*8;
console.log (multi);

var divi = 6/2;
console.log (divi);

var restodadivi = 5%2;
console.log (restodadivi);

var elevad = 2**3;
console.log(elevad);

var maiorq = 5>2;
console.log (maiorq);

var menorq = 5<2;
console.log(menorq);

var maioui = 5>=2;
console.log(maioui);

var menoui = 5<=2;
console.log(menoui);

var and = true && false;
console.log(and); 

var or = true || false;
console.log(or);

var not = !true;
console.log(not);