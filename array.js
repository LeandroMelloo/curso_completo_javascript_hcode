// array = dentro de um array posso ter ['string', 'int', 'booleano', new Date(), function(){}]
const carros = ['Palio', 'Fusca', 'Onibus', 10, true, new Date(), function(){}];
console.log(carros);
console.log(carros.length); // 7
console.log(carros[0]); // Palio
console.log(carros[5]); // Mon May 03 2021 21:27:40 GMT-0300 (Horário Padrão de Brasília)
console.log(carros[5].toLocaleString('pt-BR')); // 03/05/2021 21:27:40
console.log(carros[6]()); // undefined

carros.forEach(function(valor, indice) {
    console.log(`${indice}:${valor}`);
});