const peso = parseFloat (prompt("¿cual es tu peso?"));
const altura = parseFloat (prompt("¿cual es tu altura?"));

const imc = peso/altura**2;

console.log(`tu IMC es ${imc}`);
