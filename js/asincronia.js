// Asincronia en JavaScript
let Time = setTimeout(()=>{
  console.log("Este Temporizador se activa despues de un segundo");
}, 1000)

let inter = setInterval(() => {
    console.info(new Date().toLocaleTimeString());
}, 3000);

clearInterval(inter);
clearTimeout(Time);
