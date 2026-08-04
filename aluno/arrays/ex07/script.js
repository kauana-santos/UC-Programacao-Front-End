function verificarBanimento(listaBanidos, apelido){
    return listaBanidos.includes(apelido)
}
let banidos = ["WiseScorpion", "Plabbernom", "xxx33Fibberflop"];

let usuario1 = "WiseScorpion";
let status1 = verificarBanimento(banidos, usuario1)

if(status1){
    console.log(`${usuario1} esta banido`)
} else{
    console.log(`${usuario1} esta liberado`)
}

let usuario2 = "Luisa";
let status2 = verificarBanimento(banidos, usuario2)

if(status2){
    console.log(`${usuario2} esta banido`)
} else{
    console.log(`${usuario2} esta liberado`)
}






