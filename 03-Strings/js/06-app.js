const producto = 'Monitor 20 pulgadas ';

// .repetear te va a permitir repetir una cadena de texto...

const texto = 'En promocion'.repeat(3);

console.log(texto);
console.log (`${producto} ${texto} !!!`);

// Split, dividir una string

const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer , caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScrpit #JSModernoConJuan";
console.log(tweet.split("#"));