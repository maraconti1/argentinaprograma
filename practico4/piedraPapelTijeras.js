function obtenerJugadaComputadora(){
    let resultado = Math.round(Math.random()*1.75)
    if (resultado === 0){
        return "piedra"
    }else if(resultado === 1){
        return "papel"
    }else {
        return "tijeras";
    }
}

function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
const usuario = readlineSync.question("Ingrese su eleccion (piedra, papel o tijeras) : ");
return usuario
}

function determinarGanador(computadora, jugador){
        if(computadora === "piedra" && jugador === "tijeras" || computadora === "tijeras" && jugador === "papel" || computadora === "papel" && jugador === "piedra"){
            return "Gana la computadora";
        }else if(jugador === "piedra" && computadora === "tijeras" || jugador === "tijeras" && computadora === "papel" || jugador === "papel" && computadora ==="piedra"){
            return "Gana el usuario"
        }else {
            return "Empate";
        }

}

let computadora = obtenerJugadaComputadora();
let jugador = obtenerJugadaUsuario();  
let result = determinarGanador(computadora, jugador);
console.log("La computadora eligió: " + computadora + ". El usuario eligió: " + jugador + ". El resultado fue: " + result + "." );