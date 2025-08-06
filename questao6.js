/*
6-Crie uma função que receba um array e retorne o primeiro e último elemento desse
array como um novo array:
ex: firstLast([1, 2, 3]); return [1,3];
*/

const firstLast = (numeros) => {
    let _numeros = [];
    _numeros.push(numeros[0]);
    _numeros.push(numeros[numeros.length - 1]);
    return _numeros;
}

console.log(firstLast([1, 2, 3]));