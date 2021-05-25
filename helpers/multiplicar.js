const fs = require('fs');
const colors = require('colors');

const crearArchivo = (tabla = 1, limit, list) => {
    return new Promise((resolve, reject) => {
        console.log('=====================');
        console.log(`   Tabla del ${tabla}`.brightMagenta);
        console.log('=====================');

        let result = '';

        for (let i = 1; i <= limit; i++) {
            result += `${tabla} x ${i} = ${tabla * i}\n`;
        }

        list && console.log(result.white);

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, result);

        resolve(`tabla-${tabla}.txt`);
        reject('No se pudo crear el archivo.');        
    });
}

module.exports = {
    crearArchivo
};