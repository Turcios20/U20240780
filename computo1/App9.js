let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)


rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraProcesada = palabra.toLowerCase().replace(/\s+/g, '');
    const palabraInvertida = palabraProcesada.split('').reverse().join('');
    if (palabraProcesada === palabraInvertida) {
        console.log('La palabra ingresada es un palíndromo.');
    } else {
        console.log('La palabra ingresada no es un palíndromo.');
    }
    process.exit();
});