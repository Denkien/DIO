function returnEven(array){
    let evenN = []
    for(let i=0; i < array.length;i++){
        if(array[i] %2 == 0){
            evenN.push(array[i]);
        } else{
            console.log(`${array[i]} não é par`)
        }
    }
    console.log("os numeros pares são:", evenN);
}

let array = [1,2,3,4,5,6,7,8,9];

returnEven(array);