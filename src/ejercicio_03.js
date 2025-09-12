/*
### 3️⃣ Transformación de Datos con map()
**Archivo:** `src/ejercicio3.js`  
Crea un array de estudiantes con `nombre`, `edad`, `notas` (array de números).  
Usa `map()` para:
- Crear un nuevo array con solo los nombres
- Crear un array con el promedio de cada estudiante
- Agregar una propiedad `estado` ("Aprobado" si promedio >= 70, "Reprobado" si < 70)

*/


let estudiantes = [
    {
        nombre: "Ana",
        edad: 20,
        notas: [80, 98, 89]
    },
    {
        nombre: "Carlos",
        edad: 22,
        notas: [35, 90, 68]
    },
    {
        nombre: "Lucía",
        edad: 19,
        notas: [50, 78, 49]
    },
    {
        nombre: "Pedro",
        edad: 21,
        notas: [68, 72, 95]
    },
    {
        nombre: "Sofía",
        edad: 20,
        notas: [92, 66, 43]
    }
];


const nombreEstudiantes = estudiantes.map(estudiante => estudiante.nombre)
console.log(nombreEstudiantes)


const promedioEstudiante = estudiantes.map(estudiante=> (estudiante.notas.reduce((acumulador, actual) => acumulador + actual, 0))/estudiante.notas.length)
console.log(promedioEstudiante)

const insertPromedio = estudiantes.map(est => ({...est, promedio: promedioEstudiante[estudiantes.indexOf(est)  ]              }))

 estudiantes = insertPromedio.map(est => ({...est, estado: est.promedio>70? "Aprobado" : "Reprobado"}))

 console.log(estudiantes)



