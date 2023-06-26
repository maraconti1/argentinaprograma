let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia" ];
let rechazados = [ ];
let admitidos = [ ];
for (let i = 0; i < personas.length; i++){
    if (i === personas.indexOf("Jose")){
        rechazados += personas[i];
    }else if ( i === personas.indexOf("Sofia")){
        rechazados += " y " + personas[i] + ".";
    }else if (i === personas.length-1){
        admitidos = admitidos.slice(0, admitidos.length - 2) + " y " + personas[i] + ".";
    }else {
        admitidos += personas[i] + ", ";
    }
}

console.log("La lista de invitados admitidos es: " + admitidos);
console.log("La lista de invitados rechazados es: " + rechazados);
