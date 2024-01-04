let player = {
    saude: 100,
    felicidade: 50,
    moedas: 20,
    roupa: 'nao',
    play: function(){
        this.felicidade += 30;
    },
    eat: function(comida){
        if(comida == 'laranja'){
            this.saude += 10;
        }
        else if(comida == 'uva'){
            this.saude += 20;
        }
    },
    comprarRoupa: function(){
        if(this.moedas >= 20 && this.roupa == 'nao'){
            this.moedas -= 20;
            this.roupa = 'padrao';
        }
        else if(this.moedas < 20 && this.roupa == 'nao'){
            console.log("Nao ha dinheiro suficiente para comprar a roupa padrao");
        }
        else if(this.moedas >= 50 && this.roupa == 'padrao'){
            this.moedas -= 50;
            this.roupa = 'luxuosa'
        }
        else if(this.moedas < 50 && this.roupa == 'padrao'){
            console.log("Nao ha dinheiro suficiente para comprar a roupa luxuosa");
        }
    },
    trabalhar: function(){
        this.moedas += 50;
    }
}

console.log(player);
player.play();
player.eat('laranja');
player.eat('uva');
console.log(player);
player.comprarRoupa();
console.log(player);
player.trabalhar();
console.log(player);
player.comprarRoupa();
console.log(player);
