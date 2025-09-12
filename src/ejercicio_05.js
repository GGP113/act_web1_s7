/*

### 5️⃣ Búsqueda y Verificación
**Archivo:** `src/ejercicio5.js`  
Crea un array de usuarios con `id`, `nombre`, `email`, `activo`.  
Implementa búsquedas usando:
- `find()` para buscar usuario por email
- `findIndex()` para obtener posición de usuario por id
- `some()` para verificar si hay usuarios inactivos
- `every()` para verificar si todos tienen email válido (contiene @)



*/ 


const usuarios = [
  {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana.perez@email.com",
    activo: true
  },
  {
    id: 2,
    nombre: "Carlos Gómez",
    email: "carlos.gomez@email.com",
    activo: true
  },
  {
    id: 3,
    nombre: "Lucía Fernández",
    email: "lucia.fernandez@email.com",
    activo: true
  },
  {
    id: 4,
    nombre: "Miguel Torres",
    email: "miguel.torres@email.com",
    activo: false
  },
  {
    id: 5,
    nombre: "Sofía Ramírez",
    email: "sofia.ramirez@email.com",
    activo: true
  }
]


let userEmail = "miguel.torres@email.com"

const usuarioEncontrado = usuarios.find(user => user.email == userEmail);
console.log(`El usuario con email ${userEmail} es `, usuarioEncontrado, "\n") ;


let userID = 3
const indice = usuarios.findIndex(user => user.id === userID);
console.log(`El inidice del usuario con ID ${userID} es: ${indice} \n`);

let userInactivo = usuarios.some(user => !user.activo)

let mensajeInactivo =  userInactivo? "Hay usuarios inactivos":"No hay usuarios inactivos"

console.log(mensajeInactivo,"\n")

let verEmail = usuarios.every(user => user.email.includes("@"))

let mensajeEmail = verEmail? "Todos los emails son validos": "Hay al menos un email invalido"
console.log(mensajeEmail)

