const produto1 = {
    nome: "Leite",
    preco: 8.50,
    categoria: "Laticínios"
};

const produto2 = {
    nome: "Café",
    preco: 18.90,
    categoria: "Bebidas"
};

function comp(produto1, produto2){
    if(produto1.preco > produto2.preco){

        console.log(`Produto mais caro: ${produto1.nome}`);
        console.log(`Categoria: ${produto1.categoria}`);
        console.log(`Preço: R$ ${produto1.preco}`);
    } else{
       
        console.log(`Produto mais caro: ${produto2.nome}`);
        console.log(`Categoria: ${produto2.categoria}`);
        console.log(`Preço: R$ ${produto2.preco}`);
    }
}

comp(produto1, produto2)