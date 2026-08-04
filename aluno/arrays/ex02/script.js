function validacao(array){
    let numeros = []

    for(let v of array){
        if(typeof v === "number"){
            numeros.push(v);
        }
    }

    return numeros

}

let valores = [10, 20, 30, "JavaScript"];

console.log(validacao(valores))


