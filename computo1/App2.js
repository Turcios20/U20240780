let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Cueal es su nombre', (nombre)=> {
    rl.question('Cual es su apellido', (apellido)=> {
        console.log(`hola, ${nombre} ${apellido}!`)
        process.exit()
    })
}) 