// Ejericio #27 - Programa una clase llamada Pelicula.

/*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD. *
- Todos los datos del objeto son obligatorios. *
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
   7 restantes números. *
- Valida que el título no rebase los 100 caracteres. *
- Valida que el director no rebase los 50 caracteres. *
- Valida que el año de estreno sea un número entero de 4 dígitos. *
- Valida que el país o paises sea introducidos en forma de arreglo. *
- Valida que los géneros sean introducidos en forma de arreglo. *
- Valida que los géneros introducidos esten dentro de los géneros 
   aceptados*. *
- Crea un método estático que devuelva los géneros aceptados*. *
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  decimal de una posición. *
- Crea un método que devuelva toda la ficha técnica de la película. *
- Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película. *

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

export class Pelicula{

    //constructor
    constructor ({id, titulo, director, anio, pais, generos, calificacion})
    {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(anio);
        this.validarPaises(pais);
        this.validarGenero(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
          return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantass", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
      return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    //Validaciones de tipo de Datos
    validarCadena(propiedad, valor){
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

      if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto.`);

      return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
      if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

      return true;
    }

    validarNumero(propiedad, valor){
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

      if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número.`);

      return true;
    }

    validarArray(propiedad, valor){
      if (!valor) return console.warn("No ingresaste datos.");

      if (valor.length === 0) return console.warn(`${propiedad} "${valor}" esta vacío.`);

      if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" NO es un Arreglo.`);

      for (let element of valor) {
        if (typeof element !== "string") return console.error(`${propiedad} NO aceptada este "${element}" tipo de datos.`);
      }

      return true;
    }
    //Final de validadcion de tipo Datos....

    //Validaciones de los Datos ingresados....
    validarIMDB(id){
      if (this.validarCadena("IMDB id", id))
      {
        if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
          return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`);
      }    
    }

    validarTitulo(titulo){
      if (this.validarCadena("Titulo", titulo))
      {
        this.validarLongitudCadena("Titulo", titulo, 100);
         /*if (titulo.length > 100) 
         return console.error("El Titulo rebasa los 100 caracteres permitidos."); // Hecha por mi*/
      }
    }

    validarDirector(director) {
      if (this.validarCadena("Director", director))
      {
        this.validarLongitudCadena("Director", director, 50);
        /*if (director.length > 50) return console.error("El Director rebasa los 50 caracteres.") //Hecha por Mi*/ 
      } 
    }

    /*validarAnio(anio){
      if (this.validarNumero("Año", anio)){
        if (anio.toString().length > 4) return console.error(`El  Año "${anio}" excede los 4 digitos`); //Hecha por mi
      }
    }*/

    validarEstreno(estreno){
      if (this.validarNumero("Año de Estreno", estreno))
      {
        if (!(/^([0-9]){4}$/.test(estreno)))
          return console.error(`Año de Estreno "${estreno}" NO es válido, debe ser un número de 4 digitos.`);
      }    
    }

    validarPaises(pais){
       this.validarArray("Pais(es)", pais);
    }

    validarGenero(generos){
      if (this.validarArray("Géneros", generos)){
        for (let genero of generos){
           if (!Pelicula.listaGeneros.includes(genero)){
            console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
            Pelicula.generosAceptados();
           }
        }
      }  
    }
    
    validarCalificacion(calificacion){
      if (this.validarNumero("Calificación", calificacion)){
         return (calificacion < 0 || calificacion > 10)
          ?  console.error(`Calificacion "${calificacion}" NO es válido, dede ser un numero entre 0-10.`)
          : this.calificacion = calificacion.toFixed(1);
      }    
    }

    //Final de validacion de Datos ingresados.

    fichaTecnica(){
      console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.anio}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`);
    }
}

/*const movie = new Pelicula("tt0000", "El sol naciente", "Lucas Montas", 2012, "Rep. Dominicana", "Drama", 8.5);
movie.soy();*/
