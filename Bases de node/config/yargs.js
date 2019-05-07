const { lister, crear } = require("./command.json");
const { argv }  = require("yargs")
    .command('lister', lister.descripcion, lister.command)
    .command('crear', crear.descripcion, crear.command);

module.exports = argv;