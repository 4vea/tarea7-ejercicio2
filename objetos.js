const myObj = {
    nombre: "Leav",
    apellido: "Avila",
    edad: 18,
    altura: 1.70,
    eresDesarrolador: true
}

const miEdad = myObj.edad;

const lista = [
    { ...myObj
    },
    {nombre: "Pepe",
    apellido: "Ramirez",
    edad: 19,
    altura: 1.75,
    eresDesarrolador: false},
    {nombre: "Lucas",
    apellido: "Valdez",
    edad: 17,
    altura: 1.87,
    eresDesarrolador: true}
]

lista.sort((a,b)=> b.edad-a.edad);