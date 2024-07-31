let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraProcesada = palabra.toLowerCase();
    const vocales = 'aeiouáéíóú';
    let numeroDeVocales = 0;
    for (let char of palabraProcesada) {
        if (vocales.includes(char)) {
            numeroDeVocales++;
        }
    }
    console.log(`El número de vocales en la palabra es: ${numeroDeVocales}`);
    process.exit();
});