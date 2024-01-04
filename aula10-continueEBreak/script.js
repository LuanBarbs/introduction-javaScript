// Break
let itens = 0;
let colidindoitens = true;

while(colidindoitens){
    itens += 1;
    console.log(itens);
    if(itens == 10){
        break;
    }
}

// Continue
let castigo = false;
let colidiu = true;
let moedas = 0;
console.log(moedas);
while(colidiu){
    if(castigo == true){
        continue;
    }
    moedas++;
    if(moedas == 10){
        break;
    }
}
console.log(moedas)