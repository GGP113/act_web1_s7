/*


### 🔟 Métodos de Objeto
**Archivo:** `src/ejercicio10.js`  
Crea un objeto y demuestra:
- `Object.keys()` - obtener claves
- `Object.values()` - obtener valores
- `Object.entries()` - obtener pares clave-valor
- Iterar sobre el objeto con `forEach()`
*/


const persona = {
  nombre: "Ana Pérez",
  edad: 28,
  ciudad: "Bogotá",
  profesion: "Ingeniera"
}


const claves = Object.keys(persona);
console.log(claves); 
console.log("\n")

const valores = Object.values(persona);
console.log(valores); 
console.log("\n")

const entradas = Object.entries(persona);
console.log(entradas);
console.log("\n")

Object.keys(persona).forEach(clave => {
  console.log(clave, ":", persona[clave]);
});