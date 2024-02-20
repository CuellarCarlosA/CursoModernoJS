//switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log("Pagaste con un cheque");
    case 'tarjeta':
        console.log("Pagaste con tarjeta")
    default:
        console.log("Aun no has seleccionado tu metodo de pago o metodo de pago no soportado");
        break;
}


function pagar() {
    console.log()
}