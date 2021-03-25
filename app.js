require('colors')

const argv = require('./config/yargs')
console.clear()
const {crearArchivo} = require('./scripts/multiplicar')

crearArchivo(argv.b, argv.l, argv.len)
    .then( (nombreArchivo) => console.log('se creo ', nombreArchivo.america , ' correctamente'.underline))
    .catch(e => console.log(e))

