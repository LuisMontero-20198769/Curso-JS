// Ejercicio #21 - Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const potenciadeArray = (arrayNumeros = undefined) =>
{
    if (arrayNumeros === undefined) return console.warn("No ingresaste un Array");

    if (!(arrayNumeros instanceof Array)) return console.error("No es un Array valido.");

    if (arrayNumeros.length === 0) return console.error("El arreglo esta vacío."); //validar que no este vacio....

    //validar que todos los datos del Arreglo sean numericos....
    for (let numero of arrayNumeros) {
        if (typeof numero !== "number") return console.error(`El dato ${numero} ingresado, NO es un número.`);
    }

    let potencias = []; //Array que guardara los resultados...

    arrayNumeros.forEach(element => {
        element = Math.pow(element, 2);
        potencias.push(element);
    });

    return console.log(potencias);
}

// Ejercicio #22 - Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayAltoBajo = (array = undefined) => 
{
   if (array === undefined) return console.warn("No hay nada escrito.");

   if (!(array instanceof Array)) return console.error("Esto es todo menos un Array.");

   if (array.length === 0) return console.error("El arreglo esta vacío.");

   for (let num of array){
     if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
   }

   let menor = array[0],
       mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    for (let i = 1; i < array.length; i++){
        if ( array[i] < menor){
            menor = array[i];
        }
    }

    return console.log(`Mayor: ${mayor}, Menor: ${menor}.`);
}

// Ejercicio #23 - Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objetodeArray = (array = undefined) =>
{
    if (array === undefined) return console.warn("No ingresaste ningun dado.");

    if (!(array instanceof Array)) return console.error("Esto no corresponde a un Arreglo");

    if (array.length === 0) return console.error("El arreglo esta vacío.");

    for (let num of array){
      if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número.`);
    }

    //Objeto Padre....
    let objeto = {
        pares: [],
        impares: []
    }

    array.forEach(element => {
        //console.log(element);
        element /= 2;
        if (Number.isInteger(element)){
            objeto.pares.push(element + element);//si es verdadero que da un entero, pues, se agrega al grupo de Pares
        }
        else {
            objeto.impares.push(element + element); // caso contrario, se agregan a al grupo de los Impares
        }
    })

    console.info(objeto);
}

// Ejercicio #24 - Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] };

const ordenarNumeros = (array = undefined) =>
{
    if (array === undefined) return console.warn("No ingresaste ningun dato.");

    if (!(array instanceof Array)) return console.error("ESTO NO ES UN ARREGLO!!!!");

    if (array.length === 0) return console.warn("Arreglo vacío!");

    //valirdar que todos sean numeros....
    for (let iterator of array) {
        if (typeof iterator !== "number") return console.error(`Esto ${iterator} no es un numero.`);
    }

    //Objeto ordenador
    let ordenador = {
        ascd: array.map(element => element).sort(),
        desc: array.map(element => element).sort().reverse()
    }
    
    console.info(ordenador);
}

// Ejercicio #25 - Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arrayD = undefined) =>
{
    if (arrayD === undefined) return console.warn("No ingresaste un dato.");

    if (arrayD.length === 0) return console.error("Arreglo vacio!");

    if (arrayD.length === 1) return console.warn("El arreglo debe tener, al menos, 2 elementos.");

    if (!(arrayD instanceof Array)) return console.error(`Esto "${typeof(arrayD)}" NO es un Arreglo.`);

    return console.info({
        original: arrayD,
        sinDuplicados: arrayD.filter((value, index, self) => self.indexOf(value) === index)
    })
} // No podras conmigo HDP!!!!

// Ejercicio #26 - Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arrayP = undefined) =>
{
    if (arrayP === undefined) return console.warn("No ingresaste un dato.");

    if (arrayP.length === 0) return console.error("Arreglo vacio!");

    if (!(arrayP instanceof Array)) return console.error(`Esto "${typeof(arrayD)}" NO es un Arreglo.`);

    //valirdar que todos sean numeros....
    for (let iterator of arrayP) {
        if (typeof iterator !== "number") return console.error(`Esto ${iterator} no es un numero.`);
    }

    const INDEX = 0,
          SUMA = arrayP.reduce((a, b) => a + b, INDEX,),
          TAMANIO = arrayP.length,
          PROMEDIO = SUMA / TAMANIO;

    return console.info(`El promedio de ${arrayP.join(" + ")} es de "${PROMEDIO}".`);
}

// Ejercicio propio....
const contarCaracteres = (cadena = undefined) =>
{
    if (cadena === undefined) return console.warn("Nada ingresado!");

    if (typeof cadena !== "string") return console.error(`Esto "${typeof(cadena)}" NO es una cadena de texto.`);

    cadena = cadena.split('');
    console.log(cadena);

    for(var i = 0; i < cadena.length; i++){
    }

    console.log(`Tiene ${i} caracteres.`);
    let numero = 2000;
    console.log(!(numero.toString().length === 4));
  
}

export const xf = {
    potenciadeArray,
    arrayAltoBajo,
    objetodeArray,
    ordenarNumeros,
    eliminarDuplicados,
    promedio,
    contarCaracteres
}