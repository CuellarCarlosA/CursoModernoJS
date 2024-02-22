const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//todo deben cumplir las condiciones 
const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);

// al menos uno se debe de cumplir
const resultado2 = carrito.some(producto => producto.precio < 1000);
console.log(resultado);