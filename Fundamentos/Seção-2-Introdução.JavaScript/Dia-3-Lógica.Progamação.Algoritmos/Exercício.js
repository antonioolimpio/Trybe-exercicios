let fatorial = 1;
let numero = 10;

for(let index = 1; index <= numero; index += 1){
fatorial = fatorial * index;
}
console.log(fatorial);
----- 1 -------

let word = 'Tryber';
let palavraInvertida = '';

for(let index =0; index < word.length; index += 1){
    palavraInvertida += word[word.length - 1 - index];
}
console.log(palavraInvertida);
------ 2 ------

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = maior

for(let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}
console.log(maior);

for(let index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}
console.log(menor);
-------- 3 -------

let numeroPrimo = [];
let maiorPrimo = 0
for(index = 2; index <= 50; index += 1)
if(index % 2 != 0 && index % 3 != 0) {
     numeroPrimo.push(index);
}

for(index = 0; index < numeroPrimo.length; index += 1) {
    if (numeroPrimo[index] > maiorPrimo) {
        maiorPrimo = numeroPrimo[index];
        }
}
console.log(maiorPrimo);
----------- 4 ------- 

