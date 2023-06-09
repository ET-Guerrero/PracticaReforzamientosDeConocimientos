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


const id = 6;
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch( err => console.log(err))

// getSalario(id)
// .then(salario => console.log(salario))
// .catch(err => console.log(err))

// getEmpleado(id)
//     .then( empleado =>{
//         getSalario(id)
//             .then(salario =>{
//                console.log(`El empleado ${empleado} tiene un salaio ${salario}`) 
//             })
//             .catch(err => console.log(err))
//     }
        
//     ).catch(err => console.log(err))

    let nombre;
    getEmpleado(id)
    .then(empleado => {
        nombre = empleado;

        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
    .catch(err => console.log(err))