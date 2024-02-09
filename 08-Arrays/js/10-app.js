const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio:500 },
    { nombre: 'Televisión', precio:100 },
    { nombre: 'Tablet', precio:200 },
    { nombre: 'Audifonos', precio:300 },
    { nombre: 'Teclado', precio:400 },
    { nombre: 'Celular', precio:700 },
]


carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}` );
} )