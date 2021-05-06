let a = 10; // = é um operador de atribuição
const b = 20;
const c = '10';

console.log('a = 10 == c = "10" =', a == c); // true == é um operador de comparação de valor
console.log('a = 10 === c = "10" =', a === c); // false === é um operador de comparação de valor e tipos
console.log('a = 10 != c = "10" =', a != c); // false != é um operador de diferenciação de valor
console.log('a = 10 !== c = "10" =', a !== c); // true !== é um operador de diferenciação de valor e tipos
console.log('a = 10 e c = "10" | a == c && typeof c == "string" =', a == c && typeof c == 'string'); // true (&& - and - E) é um operador lógico
console.log('a = 10 e c = "10" | a === c && typeof c == "string" =', a === c && typeof c == 'string'); // false (&& - and - E) é um operador lógico
console.log('a = 10 e c = "10" | a === c && typeof c === "string" =', a === c && typeof c === 'string'); // false (&& - and - E) é um operador lógico
console.log('a = 10 e c = "10" | a == c && typeof b == "string" =', a == c && typeof b == 'string'); // false (&& - and - E) é um operador lógico
console.log('a = 10 e c = "10" | a == c || typeof c == "string" =', a == c || typeof c == 'string'); // true (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a === c || typeof c == "string" =', a === c || typeof c == 'string'); // true (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a === c || typeof c === "string" =', a === c || typeof c === 'string'); // true (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a === c || typeof b == "string" =', a === c || typeof b == 'string'); // false (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a == c || typeof b == "string" =', a == c || typeof b == 'string'); // true (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a === c || typeof b == "string" =', a === c || typeof b == 'string'); // false (|| - or - OU) é um operador lógico
console.log('a = 10 e c = "10" | a === c || typeof b === "string" =', a === c || typeof b === 'string'); // false (|| - or - OU) é um operador lógico