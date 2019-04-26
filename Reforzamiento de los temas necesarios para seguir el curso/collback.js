let empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Karii'
    },
    {
        id: 3,
        nombre: 'Mari'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB){
        callback(`No existe un empledo con el ID ${ id }`);

        return false;
    }

    getSalario(empleadoDB, callback);
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salarios => salarios.id === empleado.id);
    if(!salarioDB){
        callback(`No existe un salario para ${ empleado.nombre }`);

        return false;
    }

    empleado['salario'] = salarioDB.salario;

    callback(null, empleado);
};

getEmpleado(2, (err, empleado) => {
    if(err){
        console.log(err);

        return false;
    }

    console.log(`El Salario de ${ empleado.nombre } es de ${ empleado.salario }$`);
});
