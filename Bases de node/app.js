const fs = require("fs");

const base = (process.argv[2]).split('=')[1];
let outData = '';
for (let index = 1; index <= 10; index++)
    outData += `${ base } * ${ index } = ${ base * index }\n`;

fs.writeFile(`tablas/tablas_${ base }.txt`, outData, 'utf8',
    err => {
        if (err) throw err;
    
        console.log('Archivo Guardado!');
    });