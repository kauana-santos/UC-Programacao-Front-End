function retornarQuantidadeDeGasolina(quilometros, consumoMedio){
    return (quilometros * 2 * consumoMedio) / 100;
}

alert(retornarQuantidadeDeGasolina(200, 10))