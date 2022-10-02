var numeros=require('./numeros');
const Logger = require('logplease');
const log = Logger.create('utils');

function getNumeros(boolean){
    if(boolean==true){
        log.info('El Numero es Par')
    }else{
        log.error('El Numero No es Par');
    }

}

getNumeros(numeros.esPar(2));
getNumeros(numeros.esPar(3));
getNumeros(numeros.esPar(101));
getNumeros(numeros.esPar(201));
getNumeros(numeros.esPar(202));
getNumeros(numeros.esPar(100));

