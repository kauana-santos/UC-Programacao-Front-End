function addPedido(pedido, novoCod){
    if(pedido.length >= 10){
        pedido.shift();
    }
    pedido.push(novoCod);
    return pedido
}

let historico = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "0010"];

addPedido(historico, "0011")

console.log(historico)