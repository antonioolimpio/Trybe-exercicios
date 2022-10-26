let nome = 'arara';

function reverse(nome) {
    for(let index in nome) {
        if(nome[index] != nome[(nome.length - 1) - index]){
            return false;
        }
    }
    return true;
}
console.log(reverse);
-------- 1 ------

let arrayTeste = [2, 3, 4, 7, 10, 1];

function iDeMaior() {
    let maior = 0;
    for(let index in arrayTeste){
        if(arrayTeste[index] > maior)
        maior = arrayTeste[index];
}
    for(let index in arrayTeste){
        if(maior === arrayTeste[index]){
         maior = index;
        }
    }
    return maior;
}
console.log(iDeMaior());
------- 2 ------

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

const repetidor = () => {
    
}