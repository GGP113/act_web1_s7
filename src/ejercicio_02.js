/*

### 2️⃣ Filtrado de Productos por Categoría
**Archivo:** `src/ejercicio2.js`  
Usando el inventario del ejercicio anterior, utiliza el método `filter()` para:
- Mostrar solo productos de la categoría "Electrónicos"
- Mostrar productos con stock menor a 10
- Mostrar productos con precio mayor a $500


*/

const inventario = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónicos", stock: 25 },
    { id: 3, nombre: "Silla ergonómica", precio: 150, categoria: "Muebles", stock: 8 },
    { id: 4, nombre: "Teclado mecánico", precio: 90, categoria: "Accesorios", stock: 30 },
    { id: 5, nombre: "Cafetera", precio: 60, categoria: "Electrodomésticos", stock: 15 }
];


const electronicos = inventario.filter(item => item.categoria==="Electrónicos" );
const menorStock = inventario.filter(item => item.stock<10 );
const mayorPrecio = inventario.filter(item => item.precio>500 );


console.log("Los productos de la categoría Electrónicos son: \n")

electronicos.forEach((item, indice, electronicos) => {
    console.log(` ${item.id}. ${item.nombre}: ${item.categoria}`);
});


console.log("\n Los productos con stock menor a 10 son: \n")
menorStock.forEach((item, indice, menorStock) => {
    console.log(` ${item.id}. ${item.nombre}: ${item.stock} (stock)`);
});


console.log("\n Los productos con productos con precio mayor a $500 son: \n")
mayorPrecio.forEach((item, indice, mayorPrecio) => {
    console.log(` ${item.id}. ${item.nombre}: ${item.precio}$`);
});


