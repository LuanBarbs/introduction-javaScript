/*
// ! NOT
let magico = !false;
if(magico){
    alert("Magico!");
}
else{
    alert("Nao e magico!");
}

// && AND
let pontos = 1000;
let horasjogo = 3;
if(pontos == 1000 && horasjogo > 2){
    alert("Toma bonus");
}

// || OR
pontos = 1000;
horasjogo = 1;
let vidas = 3;
if(pontos < 1000 || vidas < 2){
    alert("Toma bonus");
}
*/

// Exercício 5:
let pontos = 1000;
let vidas = 3;
let magico = false;
if(vidas >= 3 && pontos > 1000){
    alert("Player recebe chave azul");
}
else if(vidas < 3 || pontos < 1000){
    alert("Player recebe chave verde");
}
else if(pontos == 1000 && !magico){
    alert("Player recebe chave laranja");
}


