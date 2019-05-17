require('colors');

const { _:input, tarea, id } = require('./config/yargs');

const { add, lister, estado, delete:erase } = require('./src/index');

switch (input[0]) {
    case 'add':
        add(tarea)
            .then(result => {
                if(result)
                    return console.log(result.red);
                
                return console.log("Tarea Guardada".green);
            });
        break;

    case 'lister':
        lister()
            .then(result => console.log(result.cyan));
        break;

    case 'update':
        estado(id-1)
            .then(result => {
                if(result === true)
                    return console.log("Tarea Actualizada".green);
                
                return console.log(`${ !result ? 'Tarea no encontrada' : result }`.red);
            });
        break;

    case 'delete':
        erase(id-1)
            .then(result => {
                if(result)
                    return console.log(result.red);
                
                return console.log("Tarea Eliminado".green);
            });
        break;

    default:
        console.log(`Comando ${ input } no identificado`);
        break;
}