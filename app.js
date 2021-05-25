const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.li, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creados'))
    .catch((err) => console.log(err));