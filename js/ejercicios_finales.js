// Ejercicio #21 - Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const potenciadeArray = (arrayNumeros = undefined) =>
{
    if (arrayNumeros === undefined) return console.warn("No ingresaste un Array");

    if (!(arrayNumeros instanceof Array)) return console.error("No es un Array valido.");

    let potencias = []; //Array que guardara los resultados...

    arrayNumeros.forEach(element => {
        element = Math.pow(element, 2);
        potencias.push(element);
    });

    return console.log(potencias);
}

export const xf = {
    potenciadeArray
}