const argv  = require("./config/yargs");

require('colors');

const { geoTabla, geoFile } = require('./helper');

const { base, limit, _:exec } = argv;

let outData = geoTabla(base, limit);

switch (exec[0]) {
    case 'crear':
        geoFile(`tablas/tablas_${ base }.txt`, outData)
            .then(res => console.log(res.green))
            .catch(err => console.log(err.red));
        break;
    
    case 'lister':
        console.log(outData);
        break;
    default:
        console.log('Sin comando para executar'.yellow);
        break;
}