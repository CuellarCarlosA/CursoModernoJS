"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto);

producto.disponible = false;
producto.imagen = "imagen.jpg";

delete producto.precio;

console.log(producto);

// Freeze no te deja hacer nada
//seal te deja modificar las existentes pero no agregar