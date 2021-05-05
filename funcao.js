// 1° Function declarations ou Declarações de função
function calculadora(x1, x2, operador) {
    // função eval => executa e valida uma string
    return eval(`${x1} ${operador} ${x2}`)
}

// invocando depois de definir a função
const soma = calculadora(4, 2, '+')
const subtracao = calculadora(4, 2, '-')
const divisao = calculadora(4, 2, '/')
const multiplicacao = calculadora(4, 2, '*') 

console.log(soma) // 6
console.log(subtracao) // 2
console.log(divisao) // 2
console.log(multiplicacao) // 8


// 2° Function hoisting ou Elevação de função

// invocando antes de definir a função
const resultadoSomar = somar(14, 2, '+')
console.log(resultadoSomar) // 8

function somar(x1, x2, operador) {
    // função eval => executa e valida uma string
    return eval(`${x1} ${operador} ${x2}`)
}


// 3° Function expressions ou Função anonima
const exponenciacao= (function (x1, x2, operador) {
    // função eval => executa e valida uma string
    return eval(`${x1} ${operador} ${x2}`)
})(5, 2, '**'); // Chamo minha função anonima assim que ela é criada passando os valores.

console.log(exponenciacao) // 25

// 4° Arrow functions ou Funções de seta
const calc = (x1, x2, operador) => {
    return eval(`${x1} ${operador} ${x2}`)
}
const resultCalc = calc(14, 14, '+')
console.log(resultCalc)