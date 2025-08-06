/*
8-Elabore uma função que recebe um array de números e retorne um array que tenha
todos os números que são pares e que também tenham índices pares;
ex: tudoPar([1,2,3,4]) // return [];
    tudoPar([10,70,22,45])// return [10,22];
*/

const tudoPar = (numeros) => {
    const _numeros = [];
    for (let i = 0; i < numeros.length; i++) {
        if (i % 2 == 0 && numeros[i] % 2 == 0) {
            _numeros.push(numeros[i]);
        }
    }
    return _numeros;
}

console.log(tudoPar([1, 2, 3, 4]));
console.log(tudoPar([10, 70, 22, 45]));
