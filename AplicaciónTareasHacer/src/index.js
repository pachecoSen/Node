const { writeFile } = require('fs');

let fun = [];

const loadData = () => {
    try {
        return require('./data/tareas.json').data;   
    } catch (error) {
        return [];
    }
};

fun.add = descripcion => {
    return new Promise(resolve => {
        let data = loadData();
        data.push({ descripcion, 'estatus':false});
        data = JSON.stringify({ data });

        writeFile('./src/data/tareas.json', data, err => {
            resolve(err);
        });
    })
};

fun.lister = () => {
    return new Promise(resolve => {
        let out = "", data = loadData();
        data.forEach((i,e) => {
            if(i)
                out += `ID: ${ e+1 } \t -> \t  "${ i.descripcion }" \t >> \t ${ !i.estatus ? 'Pendiente' : 'Realizada' }\n`;
        });

        resolve(out);
    });
};

fun.estado = id => {
    return new Promise(resolve => {
        let data = loadData();
        if(data[id] !== null){
            data[id].estatus = true;
            data = JSON.stringify({ data });

            writeFile('./src/data/tareas.json', data, err => {
                resolve(err);

                return false;
            });
        }

        resolve(false);
    });
}

fun.delete = id => {
    return new Promise(resolve => {
        let data = loadData();
        delete data[id];
        data = JSON.stringify({ data });

        writeFile('./src/data/tareas.json', data, err => {
            resolve(err);

            return false;
        });

        resolve(false);
    });
};

module.exports = fun;