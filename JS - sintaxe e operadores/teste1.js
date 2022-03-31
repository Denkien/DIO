/* function func(x,y){

    x = Number(prompt("Digite o primeiro número."));
    y = Number(prompt("Digite o segundo número."));

    if(x===y){
        console.log(`Os números ${x} e ${y} são iguais. `);
    }else{
        console.log(`Os números ${x} e ${y} não são iguais.`)
    }

    let soma = x+y;
    console.log("Sua soma é ", x+y, );

    if (soma > 10){
        console.log(", que é maior que 10");
    }else{
        console.log(", que é menor que 10");
    }
    
    if (soma > 20){
        console.log(" e maior que 20.");
    }else{
        console.log("e menor que 20.");
    }
}

func() */

//Recebe dois números, os soma, vê se é maior ou menor que 10 e 20 e mostra ao usuário.

function f(x,y){
    x = Number(prompt("Digite o primeiro número."));
    y = Number(prompt("Digite o segundo número."));
    if (x===y){
        var igual="são";
    }else{
        var igual="não são";
    }

    let soma = x+y;
    

    if (soma===10){
    var dez = "igual a";
    }else if(soma>10){
        var dez = "maior que";
    
    }else{
        var dez = "menor que";
    }
    
    if (soma===20){
        var vinte = "igual a";
    }else if(soma>20){
        var vinte = "maior que";
    }else{
        var vinte = "menor que";
    }


    console.log(`Os numeros ${x} e ${y} ${igual} iguais. Sua soma é ${soma}, que é ${dez} 10 e ${vinte} 20.`);

    prompt(`Os numeros ${x} e ${y} ${igual} iguais. Sua soma é ${soma}, que é ${dez} 10 e ${vinte} 20.`);
}

f()