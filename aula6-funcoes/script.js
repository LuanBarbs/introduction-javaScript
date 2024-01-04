function nomedafuncao(parametros){
    //corpo da funcao;
    //return valor de retorno;
}

function htm(horas){
    let resultado = horas*60;
    return resultado;
}

function estado(vel){
    if(vel == 0){
        alert("parado");
    }
    else if(vel > 0 && vel < 100){
        alert("andando");
    }
    else if(vel > 100){
        alert("correndo");
    }
}

// Exercício 6:
function loja(dinheiro, item){
    let compra = 0;
    if(item == "Espada" && dinheiro >= 100){
        console.log("Player recebe uma espada");
        compra += 1;
    }
    else if(item == "Escudo" && dinheiro >= 200){
        console.log("Player recebe um escudo");
        compra += 1;
    }
    else if(item == "Adaga" && dinheiro >= 300){
        console.log("Player recebe uma adaga");
        compra += 1;
    }
    else{
        console.log("Item não existente ou player não tem dinheiro suficiente");
    }
    return compra;
}

let qEspada = 0;
let qEscudo = 0;
let qAdaga = 0;
let dinheiroPlayer = 200;
qEspada += loja(dinheiroPlayer, "Espada");
console.log(qEspada);
dinheiroPlayer = 100;
qAdaga += loja(dinheiroPlayer, "Adaga");
console.log(qAdaga);