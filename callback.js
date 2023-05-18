const getUsuarioById = (id, callback) => {

    

    const usuario = {
        id,
        nombre: 'Pepe'
    }
    
    setTimeout( () => {
        callback(usuario)
    }, 1500  )
    
}

getUsuarioById(10, (usuario)=>{
    console.log('ejecutamos la funcion', usuario)
})