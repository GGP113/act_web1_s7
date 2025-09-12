/*


### 8️⃣ Desestructuración de Arrays
**Archivo:** `src/ejercicio8.js`  
Dado el array `['JavaScript', 'Python', 'Java', 'C++', 'Go']`:  
- Extrae los primeros 3 lenguajes
- Extrae el primero y el último
- Usa rest operator para separar el primero del resto
- Intercambia dos variables usando desestructuración


*/

const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go']

console.log( `Primeros 3 lenguajes: ${lenguajes.slice(0,3)} \n`)

console.log( `Primer elemento: ${lenguajes[0]}, ultimo elemeto: ${lenguajes[  lenguajes.length-1]} \n`)

const [primero, ...resto] = lenguajes;

console.log("Primero:", primero); // "JavaScript"
console.log("Resto:", resto);  


let [a, b, ...rest] = lenguajes;

[a, b] = [b, a];
console.log("\nArray con primeros intercambiados:", [a, b, ...rest]);