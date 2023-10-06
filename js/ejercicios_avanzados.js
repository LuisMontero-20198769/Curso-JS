// Ejericio #12 - Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => 
{
  if(numero == 4) return console.log(false);
  
  if(numero === "" || numero === " ") return console.warn("Sin numero");

  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.error("No es un numero"); //nueva validacion de numeros...

  if(numero === 0) return console.error("El numero no puede ser 0");

  if(numero === 1) return console.error("El numero no puede ser 1");

  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo.");

  for (let x = 2; x < numero / 2; x++)
  {
     if((numero % x) === 0) return console.log(false);
  }

  return console.log(true); 
  
}

// Ejericio #13 - Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroImpar = (numero = undefined) => 
{
   if(numero === "" || numero === " ") return console.warn("Sin numero");

   if(typeof numero !== "number") return console.error("No es un numero"); //nueva validacion de numeros...

   if(numero === undefined) return console.warn("No ingresaste un numero");

   let result = numero / 2;

   if(numero === 0) return console.warn("Numero indivisible...")

   if(Number.isInteger(result)) return console.info(`El numero ${numero} es PAR.`);

   return console.log(`El numero ${numero} es IMPAR.`);
}



// Ejercicio #14 - Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertidorGrados = (numeroGrado = undefined, tipo = "") =>
{
   tipo = tipo.toLowerCase(); //para evitar posibles incovenientes con las mayusculas y minusculas....

   let result = undefined; // este sera el resultado obtenido....

   if(numeroGrado === undefined) return console.warn("No ingresaste un grado para convertir...");

   if(typeof numeroGrado !== "number") return console.warn(`El dato ${numeroGrado} ingresado no es un numero....`); // exige el tipo de dato sea numerico

   if(tipo === undefined) return console.error("No ingresaste un tipo de grado a convertir...");

   if(typeof tipo !== "string") return console.warn(`El dato ${tipo} ingresado no es una cadena de texto....`); //exige que el tipo de dato sea de texto (string)....

   if (tipo.length !== 1) return console.warn("Valor de unidad no reconocido.")

   //Bucle para iterar entre las opciones deseada...
   switch(tipo)
   {
      case "c":
         result = (numeroGrado * 1.8) + 32; // operacion...
         console.log(`${numeroGrado}ºC es igual a: ${Math.round(result)}ºF`); //impresion del resultado
         break;
      case "f":
         result = (numeroGrado - 32) / 1.8; // operacion....
         console.log(`${numeroGrado}ºF es igual a: ${Math.round(result)}ºC`); //Impresion del resultado...
         break;
      default:
         console.error("Opcion no permitida");
         break;
   }
}

// Ejericio #15 -  Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirNumeros = (numero = undefined, base = undefined) =>
{
   let arrayNumeros = [];//arreglo que guardara los numeros divididos...

   if(typeof numero !== "number") return console.warn("Esto no es un numero");

   if(typeof base !== "number") return console.warn("Esto no es un numero");

   switch (base) {
      //Caso de Decimales a Binarios....
      case 10:

         arrayNumeros.push(numero);//agregamos el primer valor o el iniciar...
         let arrayBinario = [];//guardaras los resultados de las evaluaciones...
         while (numero > 2) {
            numero /= 2;
            // .trunc: me sirve para eliminar la parte decimal del numero....
            arrayNumeros.push(Math.trunc(numero));//se agregan los numeros resultantes de las divisiones, al Array 
         }
       
         arrayNumeros.forEach(element => {
            element /= 2; //comprobamos que es Par e Impar, a traves de una division...
            if (Number.isInteger(element))
            {
               arrayBinario.push(0);
            } else{
               arrayBinario.push(1);
            }
         });

         //Invertimos el Array original y, posteriormente lo unimos sin separaciones....
         console.log(`${arrayBinario.reverse().join('')} base 2.`)
         break;
      
      //Caso de Binarios a Decimales....
      case 2:
         let arrayBaseBinaria = [], //contendra las base binarias (2)
             arrayPotencias = [], // se agregan los resultados de las Potenciaciones...
             convertirArrayString = [];//para cambiar el Array de String a Entero

         numero = numero.toString().split(""); //convertimos el valor ingresado en un Array...

         //Por cada valor del Array le locamos una base 2....
         for (let index = 0; index < numero.length; index++) {
             arrayBaseBinaria.push(2);
             Math.floor(numero[index]); //elimina los decimales....
         }
         
         let i = 0; //acumulador....

         //A cada elemento de la base lo elevamos a la potencia de su Indice o longitud, es decir, si es de longitud 6.... sus potencias seran elevadas a (0, 1, 2, 3, 4, 5)
         arrayBaseBinaria.forEach(element => {
            let potencias = Math.pow(element, i);//elevamos a la potencia...
            arrayPotencias.push(potencias);
            i++;
         });
         
         
         numero.forEach(element => {
            if (element === "1")
            {
               convertirArrayString.push(1);
            } else{
               convertirArrayString.push(0);
            }
         });
         
         arrayPotencias.reverse(); // se voltea el array...
        
         let rs = [];

         //For para multiplicar elementos de cada array entre si...
         for (let i = 0; i < arrayPotencias.length && i < convertirArrayString.length; i++) {
            let result = arrayPotencias[i] * convertirArrayString[i];
            rs.push(result);
            //console.log(elementUNO);
         }

         //console.log(rs);

         //Sumar los valores del array...
         const RESULTADO = rs.reduce((anterior, actual) => anterior + actual, 0);

         console.log(`${RESULTADO} base 10.`); //Resultado optenidos.... final del ejercicio. 
   
         break;
   
      default:
         console.warn("Base indefinida....")
         break;
   }
}

// Ejercicio #16 -  Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const tuDescuento = (monto = undefined, descuento = 0) =>
{
   if (monto === undefined) return console.warn("No ingresaste el monto.");

   if(typeof monto !== "number") return console.warn("Dato no corresponde con el permitido.");

   if (typeof descuento !== "number") return console.warn("No corresponde al tipo de dato permitido.");

   if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo.");

   if (Math.sign(monto) === -1) return console.error("El  monto no puede ser negativo.");

   if (monto === 0) return console.warn("El monto no puede ser 0");

   let montoFinal = monto - (monto * (descuento/100));

   return console.info(`El ${descuento} % de ${monto} es ${montoFinal}`);
}

// Ejercicio #17 - Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 
const calcularEdad = (fecha = undefined) =>
{
   if (fecha === undefined) return console.warn("No ingresaste la fecha.");

   if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida."); //para negar la validacion de "instanceof" se debe colocar el signo de negacion "!" antes y entre parentesis la expresion 

   let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
       aniosEnMS = 1000 * 60 * 60 * 24 * 365,
       aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
       
   return (Math.sign(aniosEnMS) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde el ${fecha.getFullYear()}.`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

//Ejercicio #18 - Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVC = (cadena = undefined) =>
{
   if (cadena === undefined) return console.warn("No ingresaste un texto a evaluar.");

   if (typeof cadena !== "string") return console.error(`El dato ${cadena} ingresado no corresponde a una cadena de texto.`);

   cadena = cadena.toLowerCase().replace(/ /g, "").split("");/*   
            volver cadena de texto a minusculas, 
            quitar los espacios en blancos y
            volver cadena de texto a Array... */ 

   let arrays = [[],[]]; //Array de Arrays....
   
   cadena.forEach(element =>{
      switch (element) {
         case "a":
            arrays[0].push(1);
            break;
         
         case "e":
            arrays[0].push(1);
            break;
         
         case "i":
            arrays[0].push(1);
            break;
         
         case "o":
            arrays[0].push(1);
            break;
         
         case "u":
            arrays[0].push(1);
            break;
         
         default:
            arrays[1].push(1);
            break;
      }
   });

   const VOCALES = arrays[0].reduce((anterior, actual) => anterior + actual, 0); //Sumar los valores del array en la posicion "0" que son las vocales...
  
   const CONSONANTES = arrays[1].reduce((anterior, actual) => anterior + actual, 0); //Sumar los valores del array en la posicion "0" que son las vocales...

   return console.info(`Vocales: ${VOCALES} y Consonantes: ${CONSONANTES}.`); //RESULTADO FINAL....
}

export const ejerciciosAvanzados = {
   numeroPrimo,
   numeroImpar, 
   convertidorGrados, 
   convertirNumeros,
   tuDescuento,
   calcularEdad,
   contarVC
}

/*
  Nota: 
      La validacion de "typeof" es solo para valores primitivos...

      Mietras que, la validacion de "instanceof", es para datos complejos. 
*/