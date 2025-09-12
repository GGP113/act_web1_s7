/*


### 1️⃣ Gestión de Inventario Básico
**Archivo:** `src/ejercicio1.js`  
Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: `id`, `nombre`, `precio`, `categoria`, `stock`.  
Declara al menos 5 productos y muestra:
- Todos los productos
- Total de productos en inventario
- Valor total del inventario


*/


const inventario = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica", stock: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónica", stock: 25 },
    { id: 3, nombre: "Silla ergonómica", precio: 150, categoria: "Muebles", stock: 8 },
    { id: 4, nombre: "Teclado mecánico", precio: 90, categoria: "Accesorios", stock: 30 },
    { id: 5, nombre: "Cafetera", precio: 60, categoria: "Electrodomésticos", stock: 15 }
];


console.log("Los productos dentro del inventario son: \n")

inventario.forEach((item, indice, Inventario) => {
    console.log(` ${item.id}. ${item.nombre}`);
});

console.log(`\n En total hay: ${inventario.length} productos en el inventario\n`)

const suma = inventario.reduce((acumulador, actual) => acumulador + actual.precio, 0);

console.log(`El Valor total del inventario es: ${suma}`);