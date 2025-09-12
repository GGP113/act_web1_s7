/*

### 4️⃣ Análisis de Ventas con reduce()
**Archivo:** `src/ejercicio4.js`  
Dado un array de ventas con `producto`, `cantidad`, `precio`, `fecha`:  
Usa `reduce()` para calcular:
- Total de ingresos
- Producto más vendido (por cantidad)
- Promedio de venta por transacción


*/

const ventas = [
  {
    producto: "Laptop",
    cantidad: 2,
    precio: 3500,
    fecha: "2025-09-01"
  },
  {
    producto: "Mouse inalámbrico",
    cantidad: 5,
    precio: 80,
    fecha: "2025-09-02"
  },
  {
    producto: "Teclado mecánico",
    cantidad: 3,
    precio: 220,
    fecha: "2025-09-03"
  },
  {
    producto: "Monitor 27''",
    cantidad: 1,
    precio: 1200,
    fecha: "2025-09-04"
  },
  {
    producto: "Auriculares",
    cantidad: 4,
    precio: 150,
    fecha: "2025-09-05"
  }
];

let totalIngresos = ventas.reduce((precioTotal, ventaI)=> (ventaI.precio)*ventaI.cantidad+precioTotal,0)

let masVendido = ventas.reduce((ventasPorItem, ventaI) => 
    {
        if(ventaI.cantidad>ventasPorItem.cantidad)
        {ventasPorItem=ventaI


        }

        return ventasPorItem


    })


    
let promedioVentas = ventas.reduce((totalVentas, vantaI) =>   vantaI.cantidad+totalVentas,0)




console.log(`El total de ingresos es : ${totalIngresos}`)
console.log(`La mayor cantidad es : ${masVendido.producto}`)
console.log(`Promedio de venta por transacción : ${promedioVentas/(ventas.length)}`)