const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

if (puntaje != 1000){ //1= diferente; == igual a
    console.log("si es diferente...");
}

if (puntaje !== "1000"){ //1= diferente; == igual a
    console.log("si es diferente...");
} else{
    console.log("no es diferente")
}
//== operador que no es estricto
// === operador que si estricto