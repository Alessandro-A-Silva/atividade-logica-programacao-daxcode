/*
4-Desenvolva uma função que recebe dois número inteiros não negativos (maiores
ou iguais a zero) e realize a multiplicação entre eles. Porém, não utilize 
o operador de multiplicação.
*/

const multiplicacao = (numero1, numero2) => {
    if (numero1 >= 0 && numero2 >= 0) {
        let total = 0;
        for (let i = 0; i < numero2; i++) {
            total += numero1;
        }
        return total;
    }
    else
        return `Os números devem ser positivos.`;
}

console.log(multiplicacao(10, 5));