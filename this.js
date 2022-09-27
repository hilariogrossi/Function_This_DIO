let pessoa1 = {
        nome: 'Hilário',
        idade: 51,
    };
let pessoa2 = {
        nome: 'Patrícia',
        idade: 54,
    };
let pessoa3 = {
        nome: 'Gabriel',
        idade: 22,
    };
let pessoa4 = {
        nome: 'Pedro Henrique',
        idade: 20,
    };

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.call(pessoa2, 20));
console.log(calculaIdade.call(pessoa3, 20));
console.log(calculaIdade.call(pessoa4, 20));

console.log(calculaIdade.apply(pessoa1, [10]));
console.log(calculaIdade.apply(pessoa2, [10]));
console.log(calculaIdade.apply(pessoa3, [10]));
console.log(calculaIdade.apply(pessoa4, [10]));

