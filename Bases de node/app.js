
const argv  = require("./config/yargs");

const { geoTabla, geoFile } = require('./helper');

const { base, limit, _:exec } = argv;

let outData = geoTabla(base, limit);

switch (exec[0]) {
    case 'crear':
        geoFile(`tablas/tablas_${ base }.txt`, outData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        break;
    
    case 'lister':
        console.log(outData);
        break;
    default:
        console.log('Sin comando para executar');
        break;
}