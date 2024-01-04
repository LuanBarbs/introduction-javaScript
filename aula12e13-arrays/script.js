let arrayvazia = [];

let estado = ['ganhou', 'andando', 'correndo', 'parado'];
console.log(estado);
console.log("Tamanho:", estado.length);
console.log("Primeiro elemento:", estado[0]);
console.log("Ultimo elemento:", estado[estado.length-1]);

estado[estado.length-1] = 'andando';
console.log("Ultimo elemento novo:", estado[estado.length-1]);

estado.push('elemento novo');
console.log(estado);

estado.pop();
console.log(estado);

// Exercício 12:
let mapa = ['Fire', 'State', 'PeopleFear', 'JF'];
console.log(mapa);
mapa.push('Jungle');
mapa.push('Orquidea');
console.log(mapa);
mapa.pop();
console.log(mapa);
mapa[0] = 'CaveMens';
console.log(mapa);

// Aula 13:
let notas = [40, 20, 50, 43, 56, 22, 34, 43, 44];
console.log("Notas antes da correcao", notas);
// While:
let i = 0;
while(i < notas.length){
    notas[i] += 20;
    i++;
}
console.log("Notas depois da correcao", notas);
// For:
for(let j = 0; j < notas.length; j++){
    notas[j] += 20;
}
console.log("Notas depois da nova correcao", notas);
//ForEach:
notas.forEach(function(entry, index, scores){
    notas[index] += 20;
});
console.log("Notas depois da nova correcao", notas);