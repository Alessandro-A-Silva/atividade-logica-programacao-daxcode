/*
11-Crie uma função que recebe como parâmetro um array de alunos, cada aluno possui nome, sobrenome, idade e notas,
sendo que notas é um array contendo 4 notas. Está função irá calcular a média de notas e retornará um objeto que contem o nome
e a maior média dos aluno.
ex: vemMedia([
    {nome: "Will", sobrenome: "Santos", idade: 28, notas: [10, 10, 10, 10]},
    {nome: "Digo", sobrenome: "Santos", idade: 26, notas: [0, 5, 9, 7]}
]); // return {nome: "Will", media: 10}
*/

function Aluno(nome, sobrenome, idade, notas) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.notas = notas;
}

const calcularMedia = (alunos) => {
    let nome = "";
    let media = 0.0;

    alunos.forEach(aluno => {
        let soma = 0;
        // soma = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0); opcao alternativa
        for (let i = 0; i < aluno.notas.length; i++) {
            soma += aluno.notas[i];
        }

        let _media = (soma / aluno.notas.length).toFixed(1);

        if (_media > media) {
            nome = aluno.nome;
            media = _media;
        }
    });
    return { nome, media }
}

const aluno1 = new Aluno("Alessandro", "Silva", 27, [7.8, 9, 8.5, 9.7]); // soma total das notas = 35
const aluno2 = new Aluno("Aline", "Santo", 25, [9, 10, 9.5, 10]); // soma total das notas = 38,6
const aluno3 = new Aluno("Carol", "Cardoso", 23, [9, 8, 8.8, 7]); // soma total das notas = 32,8

const listaAlunos = [];
listaAlunos.push(aluno1, aluno2, aluno3);

console.log(calcularMedia(listaAlunos));

