const aluno = {
    nome: "Lauro",
    idade: 15,
    curso: "Desenvolvimento de sistemas",
    notas: [8, 7, 6, 10]
};

function calcularMedia(aluno){
    let soma = 0;

    for( let notas of aluno.notas){
        soma += notas;
    }

    const media = soma / aluno.notas.length;

    aluno.media = media
}
calcularMedia(aluno)

console.log(aluno)