const carrito = [];

//Definir un producto 
const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 400,
}
const producto2 = {
    nombre: "Celular",
    precio: 800,
}


carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50,
}

carrito.unshift(producto3);

console.table(carrito);

//Eliminar ultimo elemento de un arreglo

carrito.pop();
console.table(carrito);


//Eliminar del inicio del arreglo
 carrito.shift();

 //Eliminar de en medio
 carrito.splice(1,3);
 console.table(carrito);