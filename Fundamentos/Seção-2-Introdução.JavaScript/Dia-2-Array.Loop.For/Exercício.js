let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < number.length; index += 1){
console.log(number[index]);}
------ 1 ------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let index = 0; index < number.length; index += 1 ){
    soma = soma + number[index];
}
console.log(soma);
------ 2 -------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaArt = 0;
for(let index = 0; index < number.length; index += 1 ){
    soma = soma + number[index];
    mediaArt = soma / number.length;
}
console.log(mediaArt);
------ 3 --------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaArt = 0;
for(let index = 0; index < number.length; index += 1 ){
    soma = soma + number[index];
    mediaArt = soma / number.length;
}
if (mediaArt > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}
------ 4 ---------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;

for(let index = 0; index < number.length; index += 1){
    if (number[index] > valorMaior) {
        valorMaior = number[index];
    }
}
console.log(valorMaior);
------- 5 -------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let numerosImpar = 0;

for(let index = 0; index < number.length; index += 1){
    if (number[index] % 2 ==! 0) {
        numerosImpar += 1;
    }
}
if (numerosImpar > 0){
    console.log(numerosImpar);
}
else {
    console.log("Nenhum valor ímpar encontrado");
}
------ 6 ------

let number = [5, 9, 3 ,19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;
let valorMenor = 0;

for(let index = 0; index < number.length; index += 1){
    if (number[index] > valorMaior) {
        valorMaior = number[index];
    }
}
valorMenor = valorMaior;

for(let index = 0; index < number.length; index += 1){
    if (number[index] < valorMenor) {
        valorMenor = number[index];
    }
}
console.log(valorMenor);
------- 7 --------

let number = [];
for(index = 1; index < 26; index += 1){
    number.push(index)
}
console.log(number);
-------- 8 -------

let number = [];
for(index = 1; index < 26; index += 1){
    number.push(index)
}
for(index = 0; index < number.length; index +=1){
    console.log(number[index] / 2);
}
------ FIM ---------