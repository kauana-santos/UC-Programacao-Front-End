function comparacao() {

    let num1 = Number(prompt("Digite o 1° número"))
    let num2 = Number(prompt("Digite o 2° número"))
    let num3 = Number(prompt("Digite o 3° número"))

    console.log(num1, num2, num3)

    let maior = 0;

    if(num1 > num2 && num1 > num3){
       maior = num1;

        console.log(maior)

    } else if(num2 > num1 && num2 > num3){
        maior = num2;

        console.log(maior)

    } else if( num3 > num1 && num3 > num2){
        
        maior = num3;

        console.log(maior)

    } else{
        console.log("invalido")
    }

}
comparacao();
