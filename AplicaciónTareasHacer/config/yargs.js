const parametro = {
    "id" : {
        "demand" : true,
        "alias" : "i"
    }
};

const config = [
    {
        'comando' : 'add',
        'descripcion' : "Agregar tarea",
        'parametro' : {
            "tarea" : {
                "demand" : true,
                "alias" : "t"
            },
        }
    },
    {
        'comando' : 'lister',
        'descripcion' : "Listar tareas en pantalla"
    },
    {
        'comando' : 'update',
        'descripcion' : "Actualizar estatus de tarea",
        parametro
    },
    {
        'comando' : 'delete',
        'descripcion' : "Eliminar Tarea",
        parametro
    },
];

let yargs = require("yargs");

config.forEach(i => {
    yargs.command(i.comando, i.descripcion, i.parametro);
});

module.exports = yargs.argv;