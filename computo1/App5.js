let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraVieja) => {
        rl.question('Ingrese la nueva palabra: ', (palabraNueva) => {
            const fraseModificada = frase.replace(new RegExp(palabraVieja, 'g'), palabraNueva);
            console.log(`Frase modificada: ${fraseModificada}`);
            process.exit();
        });
    });
});