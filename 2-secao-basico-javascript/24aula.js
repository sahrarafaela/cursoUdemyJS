let usoDiferentesDeAspas = "um \"sara\" oi";
let usoDeBarra = "um \\0/ sara oi";
// console.log(usoDiferentesDeAspas);
// console.log(usoDeBarra.charAt(10)); // se sair fora, fica vazio
// console.log(usoDeBarra.concat(" heeeeeeem asasd"));

//pesquisar por um índice:
// console.log(usoDeBarra.indexOf('u'));
// console.log(usoDeBarra.lastIndexOf('a', 3)); // do final para o incio

//macth e replace
//expressões regulares

// console.log(usoDeBarra.match(/[a-z]/g));
console.log(usoDeBarra.replace('sara', 'saraaaaaa')); //replace é substituir
console.log(usoDeBarra.replace(/a/g, 'b')); // -> substituir todos os as por b


//slice
console.log(usoDeBarra.slice(7,11));
console.log(usoDeBarra.slice(-4));
console.log(usoDeBarra.slice(-4, usoDeBarra.length - 1)); 

// uso mais fácil do slice
console.log(usoDeBarra.slice(-4,- 1)); 

// dividir a sring em array
console.log(usoDeBarra.split('', 3));

//letra maiúscula 
console.log(usoDeBarra.toUpperCase());
console.log(usoDeBarra.toLowerCase());