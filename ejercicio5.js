const peso = parseInt (prompt("¿cual es tu peso?"));
const altura = parseInt (prompt("¿cual es tu altura?"));

const imc = peso/altura**2;

console.log(`tu IMC es ${imc}`);
