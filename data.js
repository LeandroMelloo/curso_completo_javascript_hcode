let data = new Date();

console.log(data.getDate()); // pega a data atual 
console.log(data.getFullYear()); // pega o ano atual
console.log(data.getMonth()); // pega o mês atual
console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`); // saída: 3/4/2021
console.log(data.toLocaleDateString('pt-BR')); // pega a data atual do pais de origem -> 03/05/2021
console.log(data.getHours()); // pega a hora atual
console.log(data.getMinutes()); // pega o minuto atual
console.log(data.getMilliseconds()); // pega os milesegundos atual
console.log(data.getSeconds()); // pega o segundo atual
console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`); // saída: 21:7:30
console.log(data.toLocaleTimeString()); // pega a data atual do pais de origem -> 21:08:26


