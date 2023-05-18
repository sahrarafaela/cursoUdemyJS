// let não foge do escopo, mas var sim
// e por conta disso a melhor opção é let, além de mais utilizado, é atual

// veja que não da erro, mesmo declarando uma variável 2 vezes
var nome = 'sara';
var nome = 'sara';
console.log(nome);

// o let corrige esse tipo de erro