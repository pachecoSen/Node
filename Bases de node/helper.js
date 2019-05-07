const { writeFile } = require("fs");

let helpering = {};

helpering.geoTabla = (base, limit) => {
    let outData = '';
    for (let index = 1; index <= limit; index++)
        outData += `${ base } * ${ index } = ${ base * index }\n`;

    return outData;
}

helpering.geoFile = (path, data) => {
    return new Promise((res, rej) => {
        writeFile(path, data, 'utf8',
        err => {
            if (err) rej(err);
        
            res('Archivo Guardado!');
        });
    });
}

module.exports = helpering;