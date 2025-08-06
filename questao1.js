/* 
1-Crie uma função que retorna a string "Olá", concatenada com um argumento 
text (a ser passado para função) e com ponto de exclamação "!" no final.
ex: cumprimentar("William"); // return "Olá, William!";
*/

const cumprimentar = (text) => {
    return `Olá, ${text}!`;
}

console.log(cumprimentar("Alessandro"));