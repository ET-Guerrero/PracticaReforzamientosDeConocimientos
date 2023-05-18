const empleados = [
    {
        id: 1,
        nombre: 'Pepe'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Jose'
    }
]

const salarios = [
    {
        id:1,
        salario: 10000
    },
    {
        id:2,
        salario: 15000
    }
]

const getEmpleado = (id) => {
    
    return new Promise( (resolve , reject) => {
        //Curiosamente esto si funciona aunque no tenga el punto y coma
        const empleado = empleados.find( el => el.id == id)?.nombre;

        (empleado)? resolve(empleado) : reject(`No existe el empleado con id ${id}`);

              

    } );

}

const getSalario = (id) => {

    return new Promise( (resolve,reject) => {
        const salario = salarios.find(el => el.id == id)?.salario;

        (salario)? resolve(salario) : reject(`No existe el salario del id ${id}`);
    } );
}



const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es ${salario}`


    } catch(err) {
        throw err;

    }
    
}

const id = 2;
getInfoUsuario (id)
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })