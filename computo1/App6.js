let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una cadena: ', (cadena) => {
    rl.question('Ingrese el índice de inicio: ', (indiceInicio) => {
        rl.question('Ingrese la longitud de la subcadena: ', (longitud) => {
            const inicio = parseInt(indiceInicio, 10);
            const longitudSubcadena = parseInt(longitud, 10);
            const subcadena = cadena.substr(inicio, longitudSubcadena);
            console.log(`La subcadena extraída es: ${subcadena}`);
            process.exit();
        });
    });
});