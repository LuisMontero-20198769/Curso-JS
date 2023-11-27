// Asincronia en JavaScript
/*let Time = setTimeout(()=>{
  console.log("Este Temporizador se activa despues de un segundo");
}, 1000)

let inter = setInterval(() => {
    console.info(new Date().toLocaleTimeString());
}, 3000);

clearInterval(inter);
clearTimeout(Time);
*/

// JS es un lenguaje de un solo proceso o hilo, es decir, que solo puede ejecutar una sola cosa a la vez.

/*
  Procesamiento Single thread y Multi thread:

  Operaciones de CPU y Operaciones de I / O: son las que tardan mas en procesarce... I / O son las que tardan mas en dar una respuesta ante su solicitud.

  Operaciones Concurrentes y Paralelas: 
  
    - Concurriencia: es cyabdi dos o mas tareas progresan al mismo tiempo; mientras que, 
    - el Paralelismo, es cuando dos o mas tareas se ejecutan al mismo tiempo....

  Operaciones Bloqueantes y No Bloqueantes: Hace referencia a la fase de espera de nuestra app. 
    - Bloqueante: esta se limita a devolver el hilo hasta que no se ejecuten todas sus tareas. 

    - No Bloqueante: duelve inmediantamente el control al hilo principal; sin importar si a terminado su tarea y notifica lo sucedido mientras.... en esta, dado cualquier otro evento, se baja bajo un control de errores "try-catch".

  Operaciones Sincronas y Asincronas: hace referencia a cuando tendras respuestas de las operaciones. 

    - Sincrono: Significa que tendras respuestas en el tiempo inmediato, es decir, obtendras respuesta en el tiempo presente de la ejecucion de la misma. 

    - Asincrono: se ejecuta en tiempo presente y sigue.... su resultado y/o respuesta se dara en tiempo futuro
*/

    /*Codigo Sincrono Bloqueante*/
    /*(() => {
      console.log("Codigo Sincrono");
      console.log("Inicio");

      function dos(){
        console.log("Dos");
      }

      function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
      }

      uno();
      console.log("fin");
    })();

    console.log("*************");*/

    /* Codigo Asincrono No Bloqueante */
    /*(() =>{
      console.log("Codigo Asincrono");
      console.log("Inicio");

      function dos(){
        setTimeout(function () {
          console.log("Dos");
        }, 1000);
      }

      function uno(){
        setTimeout(function () {
          console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })();*/

    /*
      En resumen:

      JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida (input/ouput).
    */

    //Las Llamadas de Regreso o "Callbacks"
    /*function cuadradoCallback(value, callback) {
      setTimeout(()=>{
        callback(value, value * value);
      }, 0 | Math.random() * 1000);
    }

    cuadradoCallback(0, (value, result) => {
      console.log("Inicia Callback");
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(3, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(4, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);
              cuadradoCallback(5, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(6, (value, result) => {
                  console.log(`Callback: ${value}, ${result}`);
                  console.log("Fin del Callback!")
                });
              });
            });
          });
        });
      });
    });
    */

// *******    PROMESAS   **************
/*
   Las promesas son un tipo de "if-else", estas acceden al mandato si la misma no rechaza.

   La Promise tiene dos partes: el resolve y el reject.

    - El resolve: es la parte que "resuelve" para promesa.

    - El reject: es la que "rechaza" la promesa. 

    El metodo "then" recibe una funcion por parametro.
    El metodo "catch" recibe el error de la promesa....
*/

    /*function cuadradoPromise(value){
      if ( typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado, NO es un numero`);
      return new Promise((resolve, reject) =>{
        setTimeout(() =>{
          resolve({
            value,
            result: value * value
          })
        }, 0 | Math.random() * 1000); 
      });
    }

    cuadradoPromise(0)
      .then((obj) => {
        console.log("Inicio Promesa");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
      })
      .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
      })
      .then(obj =>{
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
      })
      .then(obj =>{
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
      })
      .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(10);
      })
      .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin Promise!");
      })
      .catch(error => console.error(error));*/

      /*let array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]; 
      for (let index = 0; index < array.length; index++) {
        index *= index
        console.log(index);
      }*/
      //alert("Hello World"); //#1
      //document.write("Hello World"); //#2
      //document.write(3+5); // #3
    /*let name = prompt("Nombre:");
    document.write(`Hola ${name}`);*/ //#4
    /*const sumar = (num, num2) => document.write(num + num2);
    sumar(2, 200);*/ //# 5
    /*const numMayor = (num, num1) =>
    {
      if (num > num1) return document.write(`Este es el Mayor: ${num}`);

      else return document.write(`Este es el Mayor: ${num1}`);
    }
    numMayor(3, 10);*/ // # 6
    /*const numMayor = (num, num2, num3) =>{
      document.write(Math.max(num, num2, num3));
    }
    numMayor(1, 0, 5);*/ // #7
    /*const divisible = num =>{
      num /= 2;
      if (Number.isInteger(num)) return document.write(true);

      else return document.write(false);
    }
    divisible(88);*/ // #8

// Curso JavaScript: 48 - Async - Await

/* Para que nuestro navegadores detecten que es una funcion asincrona, le anteponemos la palabra reservada "async" */

/* La palabra reservada "await" dice que: Ejecuta y espera el resultado de esto, antes de pasar a esto */

/* Las funciones async vienen a sustituir el promise gill */

function cuadradoPromise(value){
  if ( typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado, NO es un numero`);
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve({
        value,
        result: value * value
      })
    }, 0 | Math.random() * 1000); 
  });
}

async function funcionAsincronaDeclarada() {
    try {
      console.log("Inicio Async Function");

      let obj = await cuadradoPromise(0);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(2);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(3);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(4);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(10);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      console.log("Fin Async Function!!")
    } catch (error) {
      console.log(error);
    }
}

funcionAsincronaDeclarada();
