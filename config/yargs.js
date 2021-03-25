require('colors')

const argv = require('yargs')
            .option('b', {
            alias: 'base',
            type: 'number',
            'demandOption': true,
            'describe': 'Es la base de la tabla de multiplicar'
            })
            
            .option('l',{
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default:false,
            'describe': 'Muestra la tabla en consola'

            })
            .option("len", {
            alias: 'length',
            type: "number",
            demandOption: true,
            default:10,
            describe: "Recibe la cantidad de operaciones que se va a relaizar"
            })
            
            .check( (argv, options) => {

                if ( isNaN(argv.b)) {
                    throw 'La base tiene que ser un numero'.red
                }
                if ( isNaN(argv.len)) {
                    throw  `el valor --len debe ser numerico`.red
                } return true
            })
            
            
            .argv;
     
module.exports = argv;