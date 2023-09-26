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
         console.log(`${arrayBinario.reverse().join('')} en base 2.`)
         break;
      
      //Caso de Binarios a Decimales....
      case 2:

         let arrayDecimal = [];
         console.log(numero.toString().length);
         console.log("Convertir de Binario a Decimal.");
         break;
   
      default:
         console.warn("Base indefinida....")
         break;
   }

}

export const ejerciciosAvanzados = {
   numeroPrimo,
   numeroImpar, 
   convertidorGrados, 
   convertirNumeros
}