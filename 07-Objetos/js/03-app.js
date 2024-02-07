const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.img = "imagen.jpg";
delete producto.disponible;


console.log(producto);