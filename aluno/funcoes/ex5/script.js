function exibirProduto(nomeDoProduto, preco){
    return `${nomeDoProduto} .......... R$ ${preco}`
}

function aplicarDesconto(precoTotal, desconto){
    if (desconto > precoTotal) {
        return 0;
    }

    return precoTotal - desconto;

}

function cupomDesconto(valorTotal, cupom) {
    if (cupom === "CUPOM50") {
        return aplicarDesconto(valorTotal, 50);
    }

    if (cupom === "CUPOM100") {
        return aplicarDesconto(valorTotal, 100);
    }

    if (cupom === "CUPOM200") {
        return aplicarDesconto(valorTotal, 200);
    }

    return valorTotal;
}

console.log(exibirProduto("Jaqueta jeans", 10))
console.log(aplicarDesconto(100, 20));
console.log(cupomDesconto(100, "CUPOM50"));