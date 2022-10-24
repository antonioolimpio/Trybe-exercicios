let estrela = "*";
let espaço = " ";
let numero = 5;
let posição1 ="";
let posição2 ="";

for(index = 1; index <= 5; index += 1) {
    if (index == 1 || index == 5) {
        posição1 = estrela + estrela + estrela + estrela + estrela;
        console.log(posição1);
    }
    else {
        posição2 = estrela + espaço + espaço + espaço + estrela;
        console.log(posição2);
    }
}