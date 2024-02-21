//for Each

const pendientes = ['Tarea', 'comer', 'proyecto', 'estudiar', 'javascript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
})

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio:500 },
    { nombre: 'Televisión', precio:100 },
    { nombre: 'Tablet', precio:200 },
    { nombre: 'Audifonos', precio:300 },
    { nombre: 'Teclado', precio:400 },
    { nombre: 'Celular', precio:700 },
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);