// classe e constructor jeito antigo
const celular = function() {
    this.cor = 'prata';

    this.ligar = function() {
        console.log('fazendo uma ligação...');
        return 'ligando...';
    }
}

const objeto = new celular();

console.log(objeto.cor);
console.log(objeto.ligar());

// classe e constructor jeito novo
class motorola {
    constructor() {
        this.cor = 'prata'
    }

    ligar() {
        console.log('fazendo uma ligação...');
        return 'ligando...';
    }
}

const object = new motorola();

console.log(object.cor);
console.log(object.ligar());