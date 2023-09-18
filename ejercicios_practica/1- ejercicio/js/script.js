"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Utilice la variable "ejercicio" para indicarle al script que ejercicio ejecutar,
de esta manera podrá ir realizando uno por uno los ejercicios sin que se ejecuten
todos juntos.

*/

// seleccione el ejercicio a ejecutar

let ejercicio = 5;

if (ejercicio == 0) {
    ejercicio = prompt(`Bienvenido, ingrese el número de ejercicio que quiere realizar`);
}

// Ejercicios de sintaxis de "for"
if (ejercicio == 1) {
    // Descomentar cada bloque y encontrar el error de sintaxis :D
    /*for (let i=0; i < 10; i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
    /*   for (let i=0; i < 10; i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
      /*for(let i=0; i < 10; i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
     /* for(let i=0; i < 10; i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
     /* for(let i=0; i < 10; i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */

}

// Ejercicios de práctica numérica con bucle for
if (ejercicio == 2) {
    // Realice un bucle que cuente de 0 al 9
    // En cada iteración del bucle imprimir en consola el número
    // o índice que irá incrementando
    // Utilice bucle "for"
    for (let i=0; i <= 9; i++){
        console.log(`El valor del iterador es: ${i}`);
    }
}

// Ejercicios de práctica numérica con bucle for of
if (ejercicio == 3) {
    const numeros = [0, 1, 2, 3, 4, 5]
    // Realice un bucle que recorra el array de numeros
    // y en cada iteración imprira en la consola el valor
    // del número recorrido
    // Utilice bucle "for of"
    for(const numero of numeros){
        console.log(numero)
    }
}

// Ejercicios de práctica de objetos con bucle for of
if (ejercicio == 4) {
    const personas = [
        {
            "nombre": "Max",
            "apellido": "Power"
        },
        {
            "nombre": "Jean",
            "apellido": "Gray"
        },
        {
            "nombre": "Minerva",
            "apellido": "MacGonagall"
        }
    ];
    // Realice un bucle que recorra el array de objetos
    // personas.
    // En cada iteración imprimir el nombre de la persona.
    // Utilice bucle "for of"
    for(const persona of personas){
        console.log(`El nombre es ${persona.nombre} y el apellido es ${persona.apellido}`);
    }

}

// Ejercicios de práctica de objetos con bucle for of
if (ejercicio == 5) {
    const personas = [];
    // Esta vez el array de personas comenzará vacio.
    // Realice un bucle que en cada iteración solicite
    // al usuario con prompt un nombre y apellido.
    // Utilizar el nombre y apellido para crear un objeto
    // y almacene ese objeto en el array "personas".
    // El bucle deberá ejecutarse por 2 iteraciones.
    // Al terminarse el bucle (luego de ejecutarse todas las iteraciones)
    // deberá imprimir en consola el contenido del array "personas"
    for (let i=0; i<2; i++){
        let persona = {
            "nombre": undefined,
            "apellido": undefined, 
        };
        persona.nombre = prompt("Ingrese un nombre");
        persona.apellido = prompt("Ingrese un apellido");
        personas.push(persona);
    }
    console.log(personas);    
}