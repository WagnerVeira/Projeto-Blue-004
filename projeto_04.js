const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')();
console.clear();

const jogador = {
    nome : '',
    energia: 0
}
jogador.nome = prompt('Como gosta de ser chamado: ');
console.log();
console.log(`Que legal ${jogador.nome}, vamos começar a jogar!!!`);

const arrayItens = ['faca',
'corda',
'barraca',
'mochila',
'GPS',
'equipamento de pesca',
'isqueiro',
'lanterna'
];

const arrayItensConquistados = [];

console.log('Aqui você precisa decidir para qual lugar começará sua jornada, e seu objeto é de encontrar o calice de ouro!!!');
console.log('1-norte');
console.log('2-sul');
console.log('3-leste');
console.log('4-oeste');
prompt('Aperte Enter para continuar');



let inicial = +prompt('Decida qual destino seguirá: ');

while( inicial > 4) {
    console.log('Favor digitar um número válido');
    break;
}

primeiraDecisao: function inicia(){
    if (inicial == 1) {
        console.log('Você esta no caminho certo');
        prompt()
        jogador.energia = jogador.energia + 15;
        console.log(`Sua energia está em ${jogador.energia}`)
    } else if (inicial == 2) {
        console.log('Você terá que andar mais rápido pois escolheu o caminho mais longo');
        jogador.energia = jogador.energia + 5;
        console.log(`Sua energia está em ${jogador.energia}`);
    } else if (inicial == 3) {
        console.log('Pode se preparar pois este caminho te levará até uma tempestade');
        jogador.energia = jogador.energia + 2;
        console.log(`Sua energia está em ${jogador.energia}`);
    } else if (inicial == 4) {
        console.log('Aqui você terá um caminho muito tranquilo');
        jogador.energia = jogador.energia + 20;
        console.log(`Pela sua escolha você receberá uma ${arrayItens[0]}, prêmio de bonificação`);
        console.log(`Sua energia está em ${jogador.energia}`);
        arrayItensConquistados.push(arrayItens[0]);
    }else {
        
    }
}

inicia();
console.log();
console.log('-----------------------------------------------------------------------------');

console.log('Foi dificil fazer a primeira escolha, e já caminhou a tarde toda, e agora terá que tomar outras decisões');
prompt('Aperte enter para continuar');

console.log('1- comer alguma coisa');
console.log('2- encontrar água');
console.log('3- descansar');
console.log('4- continuar a jornada');

let decisao2 = +prompt('Qual desta opção você vai escolher: ');

segundaDecisao: function decida2(){
    if (decisao2 == 1) {
        console.log('Sim logico, tem que se alimentar!!!');
        prompt()
        jogador.energia = jogador.energia + 10;
        console.log(`Sua energia está em ${jogador.energia}`);
        console.log(`Pela sua escolha você receberá uma ${arrayItens[3]}, prêmio de bonificação`);
        arrayItensConquistados.push(arrayItens[3]);
    } else if (decisao2 == 2) {
        console.log('Depois de horas de caminhada, você tem que se hidratar!');
        jogador.energia = jogador.energia + 12;
        console.log(`Sua energia está em ${jogador.energia}`);
    } else if (decisao2 == 3) {
        console.log('Após horas de caminhada, nada melhor que uma boa descansada');
        jogador.energia = jogador.energia + 10;
        console.log(`Sua energia está em ${jogador.energia}`);
    } else if (decisao2 == 4) {
        console.log('Assim você não terá energia suficiente para chegar ao final de sua jornada ');
        jogador.energia = jogador.energia - 5;
        console.log(`Sua energia está em ${jogador.energia}`);
    }else {

    }
}
decida2();

console.log('***************************************************************************');
console.log();
prompt('aperte enter');

console.log('Já esta escurencendo, o dia já vai se por, tem que procurar um lugar seguro para passar a noite!!!');


console.log('-----------------------------------------------------------------------------');

console.log(`Bom dia ${jogador.nome}, está na hora de recomerçar a sua caminhada!!!`);
console.log('E vamos iniciar o dia fazendo escolhas :')
console.log('1- subir em uma árvore para se orientar');
console.log('2- Tentar caçar ');
console.log('3- tentar pescar');
console.log('4- procurar rastros')


let decisao3 = +prompt('Qual destas opções irá escolher:');

terceiraDecisao: function decida3() {
if (decisao3 == 1) {
    console.log('Você escolheu o lógico, agora sim já sabe para onde caminhar');
    prompt()
    jogador.energia = jogador.energia + 25;
    console.log(`Sua energia está em ${jogador.energia}`);
    console.log(`Pela sua escolha você receberá uma ${arrayItens[6]}, prêmio de bonificação`);
    arrayItensConquistados.push(arrayItens[6]);
} else if (decisao3 == 2) {
    console.log('Apesar de perder muito tempo, será muito necessario se manter alimentado!');
    jogador.energia = jogador.energia + 17;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao3 == 3) {
    console.log('Apesar de perder muito tempo, será muito necessario se manter alimentado!');
    jogador.energia = jogador.energia + 13;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao3 == 4) {
    console.log('A escolha foi sensata pois achando rastros, chegará mais rapido ao seu destino ');
    jogador.energia = jogador.energia + 20;
    console.log(`Sua energia está em ${jogador.energia}`);
}else {

}
}

decida3()

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log();

console.log('O dia já vai se acabar novamente, procure um local seguro para descançar');
console.log();

console.log('*************** TERCEIRO DIA **************');
prompt();

console.log('Sua jornada te trouxe a beira de um rio, qual decisão tomar: ');
console.log('1- procurar um barco para atravessar');
console.log('2- atravessar nadando');
console.log('3- procurar nas margens pelo calice');
console.log('4- atravessar megulhando, e procurar no fundo do rio');
console.log();

let decisao4 = +prompt('Qual destas opções irá escolher:');

tquartaDecisao: function decida4() {
if (decisao4 == 1) {
    console.log('Um barco é a melhor ideia');
    prompt()
    jogador.energia = jogador.energia + 15;
    console.log(`Sua energia está em ${jogador.energia}`);
    console.log(`Pela sua escolha você receberá uma ${arrayItens[5]}, prêmio de bonificação`);
    arrayItensConquistados.push(arrayItens[5]);
} else if (decisao4 == 2) {
    console.log('è uma forma de atravessar, porém pode se ter muita correnteza, tome cuidado');
    jogador.energia = jogador.energia + 14;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao4 == 3) {
    console.log('Muito bom, que antes de travessar você olhe em sua volta');
    jogador.energia = jogador.energia + 10;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao4 == 4) {
    console.log('De todas a as opções essa é a mais perigosa, e gasta mais energia ');
    jogador.energia = jogador.energia - 5;
    console.log(`Sua energia está em ${jogador.energia}`);
}else {

}
}

decida4()



console.log(' Estou vendo o seu empenho para atingir os objetivos!!!');
console.log(' Agora já estamos chegando ao final, e tudo vai depender de suas escolhas feitas dias atrás:')
console.log();
prompt();

console.log('********************* QUARTO DIA ********************');

console.log('Sua jornada te trouxe a entrada da caverna da lua: ');
console.log('1- procurar por um baú');
console.log('2- procurar por uma passagem secreta');
console.log('3- procurar por pistas deixadas');
console.log('4- procurar por objetos de algum valor arqueologico ');
console.log();

let decisao5 = +prompt('Qual destas opções irá escolher:');

quintaDecisao: function decida5() {
if (decisao5 == 1) {
    console.log('Um baú é sempre uma boa escolha pois, sempre a algo de valor');
    prompt()
    jogador.energia = jogador.energia + 19;
    console.log(`Sua energia está em ${jogador.energia}`);
    console.log(`Pela sua escolha você receberá uma ${arrayItens[7]}, prêmio de bonificação`);
    arrayItensConquistados.push(arrayItens[7]);
} else if (decisao5 == 2) {
    console.log('Passagem secretas, sempre esconde muitos misterios');
    jogador.energia = jogador.energia + 12;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao5 == 3) {
    console.log('SEmpre deixam pistas que podem nos levar ao calice');
    jogador.energia = jogador.energia + 7;
    console.log(`Sua energia está em ${jogador.energia}`);
} else if (decisao5 == 4) {
    console.log('Com essa escolha você está deixando de lado o objetivo principal ');
    jogador.energia = jogador.energia - 18;
    console.log(`Sua energia está em ${jogador.energia}`);
}else {

}
}

decida5()

console.log();
console.log();

console.log('&&&&&&&&&&&&&&&&&&&&&  OBJETIVOS  &&&&&&&&&&&&&&&&&&&&&&');


const resultadoFinal = jogador.energia

decisaoFinal: function decisaoF() {
    if (resultadoFinal <= 30 ) {
        console.log('VOCÊ NÃO CONSEGUIU TER UM BOM DESEMPENHO, VOCÊ FALHOU');
    } else if (resultadoFinal <= 70) {
        console.log('VOCÊ TEVE MOMENTOS BONS, MAIS MESMO ASSIM FALHOU');
    } else {
        console.log('VOCÊ FOI UM ÓTIMO EXPLORADOR, PARABÉNS VOCÊ CUMPRIU O OBJETIVO');
    }
    }
    
    decisaoF() 


console.log(`Esses foram os itens que você conquistou: ${arrayItensConquistados}`);

