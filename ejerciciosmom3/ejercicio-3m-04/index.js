// Crear el array con los números
const numeros = [0, 2, 4, 8];

// Crear un array para almacenar las combinaciones
const combinaciones = [];

// Generar combinaciones de dos dígitos sin repetir números y sin invertir
for (let i = 0; i < numeros.length; i++) {
    for (let j = i+1 ;j < numeros.length; j++) {
        alert( numeros[i]+""+numeros[j])
       }
}
