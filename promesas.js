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

const getEmpleado = (id , fcallb) => {
    const empleado = empleados.find( el => el.id === id)?.nombre

    
}