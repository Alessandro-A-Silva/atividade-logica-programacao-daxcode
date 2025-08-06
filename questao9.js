/*
9-Crie uma função que receba um array de produtos e retorne o valor total de despesa.
lembrando que um produtos tem nome, categoria e preco.
*/

function Produto(nome, categoria, preco) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
}

const despesa = (produtos) => {
    let total = 0;
    produtos.forEach(produto => {
        total += produto.preco;
    });
    return total;
}

const produto1 = new Produto("REDBULL", "BEBIDA", 10.99);
const produto2 = new Produto("PRINGLES", "SALGADINHO", 13.99);
const listaProdutos = [];
listaProdutos.push(produto1, produto2);

console.log(`R$ ${despesa(listaProdutos)}`);