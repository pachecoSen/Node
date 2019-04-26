const getNombre = async () => 'Jose';

const getApellido = () => {
    return new Promise((res, rej) => {
        setTimeout( () => {
            res('Pacheco');
        }, 3000);
    });
};

const getSaludo = async () => {
    let apellido = await getApellido();
    return `Hola ${ apellido }`;
};

console.log(getSaludo().then(saludo => console.log(saludo)));

getNombre()
    .then(nombre => {
        undefined.nombre;
        console.log(nombre);
    })
    .catch(err => {
        console.log(`Err: ${ err }`);
    });