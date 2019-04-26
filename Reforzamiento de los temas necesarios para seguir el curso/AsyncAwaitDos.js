const empleados = [
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

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = async id => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB)
        throw new Error(`No existe un empledo con el ID ${ id }`);

    return empleadoDB;
};

const getSalario = async empleado => {
    const salarioDB = salarios.find(salarios => salarios.id === empleado.id);
    if(!salarioDB)
        throw new Error(`No existe un salario para ${ empleado.nombre }`);

    empleado['salario'] = salarioDB.salario;

    return empleado;
};

const getInformacion = async id => {
    const nombre = await getEmpleado(id);
    const salario = await getSalario(nombre);

    return `El Salario de ${ salario.nombre } es de ${ salario.salario }$`;
};

getInformacion(3).then(msg => console.log(msg)).catch(err => console.log(err));