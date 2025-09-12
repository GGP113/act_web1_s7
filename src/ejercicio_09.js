/*


### 9️⃣ Desestructuración de Objetos
**Archivo:** `src/ejercicio9.js`  
Crea un objeto `persona` con propiedades anidadas (dirección, contacto).  
Demuestra:
- Desestructuración básica
- Renombrado de variables
- Valores por defecto
- Desestructuración anidada
- Rest operator en objetos

*/


const persona = {
  nombre: "Ana Pérez",
  edad: 28,
  direccion: {
    calle: "Calle 123",
    ciudad: "Bogotá",
    pais: "Colombia"
  },
  contacto: {
    email: "ana.perez@email.com",
    telefono: "3001234567"
  }
};



const { nombre1, edad1 } = persona;
console.log(nombre1, "\n"); 
console.log(edad1, "\n"); 


const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona, "\n"); 
console.log(edadPersona, "\n"); 


const {mascota = "No definido" }= persona

console.log(mascota, "\n")


const {direccion:{calle, ciudad, pais}} = persona
console.log(calle); 
console.log(ciudad); 
console.log(pais);
console.log("\n")

const { nombre, edad, ...otros } = persona;

console.log(nombre); 
console.log(edad);   
console.log(otros);

