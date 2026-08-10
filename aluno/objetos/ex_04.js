const produtos_vendas = {
	cafes: [
		{
			sku: 7654,
			marca: "Povo Brasileiro",
			preco: 24.00,
			categoria: "Mercearia"
		},
		{
			sku: 8765,
			marca: "Soberano - Gourmet",
			preco: 29.00,
			categoria: "Mercearia",
		},
		{
			sku: 3467,
			marca: "Dose Certa",
			preco: 27.00,
			categoria: "Mercearia"
		}
	]	
}

const produtos_estoque = {
	cafes: [
		{
			sku: 3467,
			peso: 500.00,
			unidade: "mg",
			estoque: 101
		},
		{
			sku: 7654,
			peso: 250.00,
			unidade: "mg",
			estoque: 182
		},
		{
			sku: 8765,
			peso: 250.00,
			unidade: "mg",
			estoque: 46
		}
	]
}

let produtos = {};

for (let produtoVenda of produtos_vendas.cafes) {

    for (let produtoEstoque of produtos_estoque.cafes) {

        if (produtoVenda.sku === produtoEstoque.sku) {

            produtos[produtoVenda.sku] = {
                sku: produtoVenda.sku,
                marca: produtoVenda.marca,
                preco: produtoVenda.preco,
                categoria: produtoVenda.categoria,
                peso: produtoEstoque.peso,
                unidade: produtoEstoque.unidade,
                estoque: produtoEstoque.estoque
            };
        }
    }
}

console.log(produtos)