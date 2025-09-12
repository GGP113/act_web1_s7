/*


### 7️⃣ Ordenamiento y Reversión
**Archivo:** `src/ejercicio7.js`  
Crea arrays de:
- Números desordenados - ordena ascendente y descendente
- Nombres de personas - ordena alfabéticamente
- Objetos con propiedad `edad` - ordena por edad
- Usa `reverse()` para invertir el orden


*/

let numeros = [42, 7, 19, 85, 3, 56, 28, 91, 14, 60];

const nombres = ["Ana", "Carlos", "Lucía", "Miguel", "Sofía", "Andrés", "Valentina", "Jorge", "Camila", "Diego"]

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Lucía", edad: 22 },
  { nombre: "Miguel", edad: 35 },
  { nombre: "Sofía", edad: 28 }
];




console.log(`Numeros ordenados ascendente: ${numeros.sort((a, b) => a - b)} \n`)
console.log(`Numeros ordenados descendente: ${numeros.sort((a, b) => b - a)} \n`)

console.log(`Nombres oredenados alfabeticamente: ${nombres.sort()}`)

personas.sort((p1, p2) => p1.edad - p2.edad);
console.log("Personas ordenadas por edad:", personas, "\n");
console.log("Personas ordenadas por edad (invertido):", personas.reverse());



