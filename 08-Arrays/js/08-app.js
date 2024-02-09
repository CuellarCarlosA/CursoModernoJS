const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


const {nombre} = producto;

console.log(nombre);

//Destructuring con arreglos
const numeros = [10,20,30,4,50,];

const [ primero, ...tercero] = numeros;
console.log(primero);
console.log(tercero);