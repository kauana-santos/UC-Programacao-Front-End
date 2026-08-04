function concatenar(p1, p2, p3, s = " | "){
    const retorno = `${p1} ${s} ${p2} ${s} ${p3}`

    return retorno
}

console.log(concatenar("um", "dois", "tres"))
