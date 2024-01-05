var a = 5;
var b = '5';
console.log(a == b);    // True
console.log(a === b);   // False

const x = [1, 2, 3, 4, 5];                          // Array
const y = x.map(function(item){return item*2});     // Função map copia o array aplicando uma função
console.log(x);
console.log(y);

const words = ['Luan', 'Casa', 'Escola', 'Janela', 'Paralelepipedo'];
const newWords = words.filter((words)=>words.length>4); 
console.log(words);
console.log(newWords);

let arr = [1, 2, 3, 4, 5, 6, 7];
function consoleEven(arr){
    let data = arr.map((num)=>(num % 2 == 0 ? num * 2 : num * 1));
    console.log(data);
}
consoleEven(arr);

function a(){
    console.log("Eu sou uma função normal");
}
const ab= (parametros) => { console.log("Eu sou uma função de seta"); }
const ac = (nome) => { console.log(`Meu nome é ${nome}`); }

// Closures:

const greet = () => {
    const prefix = 'Mr';
    return (name) => {
        console.log(`${prefix} ${name}, seja bem vindo!`);
    }
}
greet()('Yuri');

function xx(){
    var aa = 7;
    function yy(){
        console.log(aa);
    };
    return yy;
}
var zz = xx();
console.log(zz);

let add = function(x){
    return function(y){
        console.log(x + y);
    }
}
let addByTwo = add(2);
addByTwo(3);

function Counter(){
    var count = 0;
    this.incrementCount = function(){
        count++;
        console.log(count);
    }
}
//console.log(count); // Erro: count não está definida
var adder = new Counter();
adder.incrementCount(); // 1

// Objetos e Bind:
const programador = {
    nome: "Tulio",
    idade: 23,
    aniversario: function(){
        this.idade++;
    }
};

function myFunc(){
    console.log(this);
};
const obj = {
    bool: true,
    myFunc: myFunc
};
obj.myFunc();

const student_1 = {
    name: 'Yuri',
    displayName_1: function displayName(){
        console.log(this.name);
    }
};
const student_2 = {
    name: 'Tulio',
    displayName_2: function displayName(){
        console.log(this.name);
    }
};
student_1.displayName_1();
student_2.displayName_2();
student_1.displayName_1.call(student_2); // Tulio

// Protótipos e Herança Prototípica:
let arr1 = ['Codi', 'Academy'];
console.log(arr1.__proto__.forEach);
console.log(arr1.__proto__);            // Mesmo que Array.prototype
console.log(arr1.__proto__.__proto__);  // Mesmo que Object.prototype

let object = {
    name: 'Codi Academy',
    city: 'Juiz de Fora',
    getIntro: function(){
        console.log(`${this.name}, ${this.city}`);
    }
};
let object2 = {
    name: 'Curso'
};
console.log(object.__proto__);
console.log(object2.__proto__);
console.log(object2.name);
console.log(object2.city);
object2.__proto__ = object;
console.log(object2.name);
console.log(object2.city);

// Temporizadores:
// setTimeout(() => {
//     console.log('Se passaram 10 segundos!')
// }, 10000);

// const timer = setInterval(() => {
//     console.log('Eu vou continuar aparecendo até você me matar com clear!')
// }, 20000);

// clearInterval(timer);

// // O timeout é jogado para baixo
// console.log('Olá');
// setTimeout(() => {
//     console.log('Estagiário');
// }, 0);
// console.log('futuro');

// for(var i = 1; i <= 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i * 100);
// }
// for(let i = 1; i <= 5; i++){  // A unica diferença é o let i
//     setTimeout(function(){
//         console.log(i);
//     }, i * 1000);
// }

// Promessas:
const promise = new Promise((resolve, reject) => {
    let value = true;
    if(value){
        resolve('Hey, esse valor é verdadeiro.');
    }
    else{
        reject('Erro, o valor é falso!');
    }
})

promise
    .then((cer) => {
        console.log(cer);
    })
    .catch((err) => {
        console.log(err);
    })

// Debounce: Na outra pasta



