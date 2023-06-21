const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero entero : ");
let num = Number(numero);

if (num > 0 && num %2===0){
    console.log("El numero es positivo y par");
}else if (num > 0 && num %2 !== 0) {
    console.log("El numero es positivo e impar");
}else if (num < 0 ) {
    console.log("El numero es negativo");
}else {
    console.log("El numero es cero");
}
