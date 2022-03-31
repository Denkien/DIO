/*
function palindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}


console.log(palindromo("a"))

*/

function palin2(string){
    if(!string) return "string inexistente";

    for(let i=0; i<string.length/2;i++){
        if (string[i] !== string[string.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(palin2("212"));