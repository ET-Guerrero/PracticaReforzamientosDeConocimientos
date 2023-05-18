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

const getEmpleado = ( id , fcallb) => {
    const empleado = empleados.find(el => el.id === id)?.nombre
    
    if (empleado){
        fcallb(null, empleado) 
    }else{
        fcallb(`Empleado con id ${id} no existe`)
    }

}

const getSalario = (id, fcallb) => {
    const salario = salarios.find(el => el.id === id)?.salario

    if(salario){
        fcallb(null, salario)
    } else {
        fcallb(`El salario con el id ${id} no existe`)
    }
}


const id = 3

getEmpleado(id, (err, empleado) => {
    if( err ){
        console.log('ERROR')
        return console.log(err)
    }

    getSalario(id, (err, salario) => {
        if (err){
            console.log('Error')
            return console.log(err)
        }

        console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
    })

})

