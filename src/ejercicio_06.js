/*


### 6️⃣ Manipulación de Arrays
**Archivo:** `src/ejercicio6.js`  
Crea un array inicial `[1, 2, 3, 4, 5]` y demuestra:
- `push()` y `pop()` - agregar y quitar del final
- `shift()` y `unshift()` - agregar y quitar del inicio
- `splice()` - insertar elementos en posición específica
- `slice()` - extraer porción sin modificar original


*/


let arrayInicial = [1, 2, 3, 4, 5]

arrayInicial.push(5, 6)
console.log(arrayInicial, "\n")

const ultimo = arrayInicial.pop()
console.log(ultimo, "\n")


arrayInicial.unshift('primero', "segundo")
console.log(arrayInicial, "\n")

const primero = arrayInicial.shift();
console.log(primero, "\n");

const eliminados = arrayInicial.splice(1, 2); 
console.log(arrayInicial, "\n")

const porcion1 = arrayInicial.slice(1, 3);
console.log(porcion1, "\n")