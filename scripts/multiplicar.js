const fs = require('fs');
require('colors')

const crearArchivo = async(num,ls = false, len = 10) => {
    try {
        let salida = ''
        let consola = ''
        let nombreArch = `./files/tabla-del-${num}.txt`
    
        for (let i = 1; i <= len; i++ ) {
            salida += `${num} x ${i} = ${num * i}\n`
            consola += `${num} ${'x'.underline.red} ${i} = ${num * i}\n`.bgBlack.bold

        }
        fs.writeFileSync(nombreArch, salida)

        if (ls) {
            console.log(`----------------------------- tabla del ${num} -----------------------------`.rainbow)
            console.log(consola)

        }
        return nombreArch
        
    }
    catch (e) {
        throw e
    }
    
    
}

module.exports = {
    crearArchivo
}