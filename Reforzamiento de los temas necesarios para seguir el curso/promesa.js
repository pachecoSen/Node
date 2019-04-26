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

let getEmpleado = id => {
    return new Promise((res, rej) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);
        if(!empleadoDB){
            rej(`No existe un empledo con el ID ${ id }`);
    
            return false;
        }

        res(empleadoDB);
    });
};

let getSalario = empleado => {
    return new Promise((res, rej) => {
        const salarioDB = salarios.find(salarios => salarios.id === empleado.id);
        if(!salarioDB){
            rej(`No existe un salario para ${ empleado.nombre }`);

            return false;
        }

        empleado['salario'] = salarioDB.salario;

        res(empleado);
    });
};

getEmpleado(2)
    .then(empleado => getSalario(empleado))
    .then(empleado => console.log(`El Salario de ${ empleado.nombre } es de ${ empleado.salario }$`) )
    .catch(err => console.log(err) );
