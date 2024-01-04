let estado = [['parado', 'pulo'],
              ['esquerda', 'direita']];
console.log(estado);

// Acessando a posição pulo:
console.log(estado[0][1]);
// Acessando a posição direita:
console.log(estado[1][1]);

// Exercício 14:
campo = [[0, 0, 0, 0], 
         [1, 0, 0, 0], 
         [0, 1, 0, 0], 
         [1, 1, 1, 0]];
let jogada1 = campo[0][0];
let jogada2 = campo[1][1];
let jogada3 = campo[3][3];
let jogadas = [];
jogadas.push(jogada1);
jogadas.push(jogada2);
jogadas.push(jogada3);

for(let i = 0; i < jogadas.length; i++){
    if(jogadas[i] == 1){
        console.log("Voce Perdeu!");
        break;
    }
    else if(i == jogadas.length - 1){
        console.log("Voce Ganhou!");
    }
}
