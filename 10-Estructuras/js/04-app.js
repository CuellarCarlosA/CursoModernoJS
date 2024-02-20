const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log("si podemos pagar")
} else if(tarjeta) {
    console.log("Si puedo pagar porque tengo la tarjeta");
} else if(cheque){
    console.log("si tengo un cheque");
} else{
    console.log("Fondos insficientes");
}