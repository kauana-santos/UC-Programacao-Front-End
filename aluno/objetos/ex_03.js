const carro = {
    nome: "fiat",
    cor: "azul",
    modelo: "uno",
    opcionais: {
        "Direção elétrica": false,
        "Multimidia": true,
        "Ar condicionado": false
    }
};

function mostrar(carro){
    console.log(`Carro nome: ${carro.nome}`);
    console.log(`cor: ${carro.cor}`);
    console.log(`modelo: R$ ${carro.modelo}`);

    
    console.log("Opcionais:");
    console.log("Ar condicionado:", carro.opcionais["Ar condicionado"]);
    console.log("Direção elétrica:", carro.opcionais["Direção elétrica"]);
    console.log("Multimidia:", carro.opcionais["Multimidia"]);
}
    
mostrar(carro)

function alterar(carro, opcional, valor){
    carro.opcionais[opcional] = valor;
}

alterar(carro, "Multimidia", false);

console.log(carro);
