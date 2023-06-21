const readlineSync = require('readline-sync');
const numero = readlineSync.question("ingrese un numero entero del 1 al 12 : ");
let num = Number(numero);
let mesesDelAño = {1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"}

if (num===1||num===3||num===5||num===7||num===8||num===10||num===12){
    console.log("La cantidad de dias del mes de " +  mesesDelAño[numero] + " es 31")
}else if (num===4||num===6||num===9||num===11) {
    console.log("La cantidad de dias del mes de " +  mesesDelAño[numero] + " es 30")
} else {
    console.log("La cantidad de dias del mes de " +  mesesDelAño[numero] + " es 28" )
}