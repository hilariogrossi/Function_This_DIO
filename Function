let alunos = [
    {
        nome: 'Hilário',
        nota: 8,
        turma: 18,
    },
    {
        nome: 'Patrícia',
        nota: 9,
        turma: 18,
    },
    {
        nome: 'Paulo',
        nota: 5,
        turma: '2C',
    },
    {
        nome: 'Cremilson',
        nota: 4,
        turma: '1C',
    },
];

function aprovados(alunos, media) {
    let alunosAprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome } = alunos[i];

        if (nota >= media) {
            alunosAprovados.push(nome);
        }
    }

    return alunosAprovados;
}

console.log(aprovados(alunos, 7));
