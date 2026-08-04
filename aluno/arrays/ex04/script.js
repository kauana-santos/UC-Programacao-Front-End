function gerarTextoCompras(itens, formato){

    if(formato === "texto"){
        return itens.join(", ")
    } else if( formato === "lista"){
        return itens.map(item => `• ${item}`).join("\n");
    }

}

let produtos = ["Arroz", "Feijão", "Macarrão", "Leite","Café"];
let texto = gerarTextoCompras(produtos, "texto");
let listatexto = gerarTextoCompras(produtos, "lista");

console.log(texto);
console.log(listatexto);
