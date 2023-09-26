//Exportar funciones
function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

//Ejercicio #1 - Numeros de caracteres de una cadena...
function contarCaracteres (unaCadena = "") {
    
    try 
    {
        if(isNaN(unaCadena))
        {
            console.log(`Cadena con ${unaCadena.length} caracteres.`);
        }

        else if(unaCadena === null)
        {
            console.log("Esto es un null");
        }

        else if(unaCadena === "")
        {
            console.log("Sin caracteres.");
        }

        else if(unaCadena === true)
        {
            console.log("Esto es un boolean con valor true");
        }

        else if(unaCadena === false)
        {
            console.log("Esto es un boolean con valor false");
        }

        else if(typeof unaCadena === 'number')
        {
            //se convierte el numero a String y le calculamos el tamanio...
            console.log(`Es un numero con ${unaCadena.toString().length} digitos`);
        }

        else
        {
            console.warn("Alert! Dato no admitido...")
        }
    } 
    catch (error) 
    {
        console.log(`Error encontrado: ${error}`);
    }
}

//Ejercicio #2 - Texto recortado segun el numero de caracteres indicados...
const textRecortado = (texto, numero) => {
      console.log(texto.substring(0, numero)); 
}

//Ejercicio #3 - String a Array[]
const convertirTexto = (texto = "", forma = undefined) => {
      console.log(texto.split(forma)); //forma es el tipo de separacion que deseas: "", " ", ","
}

//Ejercicio #4 - Repetir texto X cantidad de veces
const repetirTexto = (texto = "", cantidad = undefined) => 
{
    if(!texto) return console.warn("No ingresaste un texto");

    if(cantidad === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto.");

    if(cantidad === 0) return console.warn("El numero de veces no puede ser 0");

    if(Math.sign(cantidad) === -1) return console.error("El numero de veces no puede ser negativo");

    if(cantidad === null) return console.warn("El numero de veces no puede ser un null.");

    for (let index = 1; index <= cantidad; index++) console.info(`${texto}, ${index}`);
}

// Ejercicio #5 -  Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (texto = "") =>
{
    if(!texto) return console.warn("No ingresaste texto");
    
    if(texto === null) return console.warn("El numer o de veces no puede ser un null.");

    //Lo convertidos en un array...
    let separarTexto = texto.split("");
    
    //Invertirmos el Array...
    let invertirArray = separarTexto.reverse(); //con el metodo reverse lo logramos...
        
    //Unimos el Array..
    let unirArray = invertirArray.join("");

    //Se imprime la cadena.. 
    console.info(unirArray);
}

//Ejercicio #6 -  Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabrasRepetida = (texto = "", palabra = "") =>
{
    let contador = 0;

    let unTexto = texto.toLowerCase(),
        unaPalabra = palabra.toLowerCase();

    if(!unTexto) return console.warn("No ingresaste texto");
    
    if(!palabra) return console.warn("No ingresaste palabra a buscar");

    let separarTexto = unTexto.split(" ");

    //console.log(separarTexto);

    separarTexto.forEach(element => {
        if(element === unaPalabra){
          contador++;
        }
    });
    
    console.log(contador);
}

//Ejercicio #7 - Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const validarPalindrinismo = (palabra = "") =>
{
   if(!palabra) return console.warn("No ingresaste texto");

   let unaPalabra = palabra.toLowerCase().split('').reverse().join('');

   console.log(palabra === unaPalabra);
}

// Ejercicio #8 -  Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (texto = "", patron = undefined) =>
{
    if (!texto) return console.warn("No ingresaste un texto");
    
    if (patron === undefined) return console.warn("No ingresaste un Patron");

    if (patron === "") return console.warn("Patron Vacio!");
      
    let unTexto = texto.split(" ");

    unTexto.forEach(element => {
        console.log(element.replace(patron, ''));
    });
}
 
// Ejercicio #9 - Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numerosAleatorios = (min, max) =>
{
    let numero = Math.random() * (max - min) + min;

    console.log(Math.round(numero));
}

// Ejercicio #10 - Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const validarCapicua = (numero) =>
{
    //Try-catch para capturar cualquier error....
    try 
    {
        //Validamos el tipo de dato...
        if(Number.isInteger(numero)) 
        {
            /*
              Creamos otra variable, la cual igualamos al valor de numero, pero convertido en String.....

              Posteriormente, lo separamos por comas (Array) y invertirmos (reverse) su estado y luego unimos nuevamente (join). 
            */
            let otroNumero = numero.toString().split("").reverse().join("");

            //console.log(numero, otroNumero);
            //Ya hecha toda la logica, procedemos a igualar el viejo valor con el nuevo. 
            console.log(otroNumero == numero);
            /*
                True: para la capiua

                False: para no....
            */
        } 
        else{
            //Mensaje de alerta....
            console.warn("El tipo de dato no es el esperado...")
        }

    } catch (error) {
        //Mensaje de captura de Error...
        console.log(`Error encontrado: ${error}`);
    }
}

//Ejercicio #11- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120

const factorial = (numero = undefined) =>
{
    if(numero === undefined) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error("No es un numero"); //nueva validacion de numeros...

    if(numero === 0) return console.error("El numero no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo.");
    
    let fac = 1;

    while (numero > 1) {
        fac *= numero;
        numero--;
    }
    console.log(fac); 
}

//Export como objeto que agrupe las demas funciones
export const aritmetica = 
{
    sumar,
    restar,
    contarCaracteres,
    textRecortado,
    convertirTexto,
    repetirTexto,
    invertirTexto,
    contarPalabrasRepetida,
    validarPalindrinismo,
    eliminarPatron
}

export const funcionesAvanzandas = 
{
    numerosAleatorios,
    validarCapicua,
    factorial
}