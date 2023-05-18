
const superman = {
    nombre: 'Klark',
    apellido: 'Ken',
    poder: 'Volar',
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }

}

const imprimeHeroe = (  { nombre,apellido,poder, edad = 30} ) =>{
    
    console.log(nombre,apellido,poder,edad)

}

let nombres = ['Rodrigo','Pepe', 'Jose']
const [h1,h2,h3] = nombres
console.log(h3)
imprimeHeroe(superman)