/*
5-Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o
elemento que repetirá, enquanto o que o segundo será o número de vezes que 
haverá repetição.
ex: repetir("code",3); //return ["code", "code", "code"];
*/

const repetir = (texto, qtd) => {
    let arr = [];
    for (let i = 0; i < qtd; i++) {
        arr.push(texto);
    }
    return arr;
}

console.log(repetir("vrum", 3));