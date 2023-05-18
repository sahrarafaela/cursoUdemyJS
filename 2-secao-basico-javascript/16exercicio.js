const nome = 'Sara';
const sobrenome = 'Nascimento';
const idade = 24;
const peso = 70;
const  altura = 1.62;
let imc = peso /(altura*altura);

const finalizando = `Meu nome é ${nome} ${sobrenome}, tenho ${idade}, peso ${peso}kg e tenho ${altura}m, meu imc é: ${imc.toFixed(2)}`;
let anoDeNascimento = 2023 - idade;

console.log(finalizando);
console.log(`nasceu em ${anoDeNascimento}`);
