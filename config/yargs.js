const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('li', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        describe: 'Multiplica hasta ese número'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) && isNaN(argv.li)) {
            throw 'La base tiene que ser un número.'
        }
        return true;
    })
    .argv;

module.exports = argv;