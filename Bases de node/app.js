const { writeFile } = require("fs"),
    { argv } = require("yargs");

const base = argv.base;
console.log(base);

let outData = '';
for (let index = 1; index <= 10; index++)
    outData += `${ base } * ${ index } = ${ base * index }\n`;

writeFile(`tablas/tablas_${ base }.txt`, outData, 'utf8',
    err => {
        if (err) throw err;
    
        console.log('Archivo Guardado!');
    });