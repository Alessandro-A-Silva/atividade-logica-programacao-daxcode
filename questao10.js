/*
10-Crie uma função que retorne o valor fatorial de um número;
ex: fatorial(5); // 120;
*/

const fatorial = (numero) => {
    let total = 0;
    for (let i = numero; i - 1 > 0; i--) {
        if (i == numero) {
            total = i * (i - 1);
        }
        else {
            total = total * (i - 1);
        }
    }
    return total;
}

console.log(fatorial(5));