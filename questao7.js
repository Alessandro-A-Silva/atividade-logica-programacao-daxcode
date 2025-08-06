/*
7-Quando temos um objeto e manipulamos suas propriedade, estamos apenas modificando-o,
mas, na verdade, o objeto continua o mesmo, ou seja, a sua referência de memória é a mesma.
Num projeto em que você está trabalhando, você foi designado a refatorar diversas funções
para que façam cópias de objetos e manipulem os dados dessas cópias, com intuito de evitar 
efeitos indesejáveis em algumas situações devido a referência a objetos. Abaixo, está a
descrição de uma dessas funções. Você escreverá uma função que recebe um objeto como primeiro
parâmetro e, como segundo parâmetro, o nome da propriedade do objeto contido nesse objeto.
Em seguida, retorna uma cópia desse objeto sem a propriedade especificada no segundo
parâmetro;
*/

function Carro(nome, marca, placa) {
    this.nome = nome;
    this.marca = marca;
    this.placa = placa;
}

const removerPropriedade = (objeto, propriedade) => {
    //const _objeto = Object.assign({}, objeto); opcao alternativa
    const _objeto = JSON.parse(JSON.stringify(objeto));
    delete _objeto[propriedade];
    return _objeto;
}

const carro = new Carro("Lancer EVO", "Mitsubishi", "VRUM");

const _carro = removerPropriedade(carro, "placa");

console.log(Object.is(removerPropriedade(carro, "placa"), carro));

