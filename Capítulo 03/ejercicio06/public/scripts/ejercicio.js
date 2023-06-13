// zindex como variable global

var zindex = 10;

let animarCartas = (carta) => {


  carta.addEventListener("click",(e) => {

        e.preventDefault();

        var isShowing = false;


        if (carta.classList.contains("show")) {
          isShowing = true
        }

        if (carta.parentNode.classList.contains("showing")) {
          // a card is already in view
          document.querySelector("div.card.show").classList.remove("show");

          if (isShowing) {
            // this card was showing - reset the grid
            document.querySelector("div.cards").classList.remove("showing");
          } else {
            // this card isn't showing - get in with it
            carta.classList.add("show");
            carta.style.zIndex = zindex;

          }

          zindex++;

        } else {
          // no cards in view
          document.querySelector("div.cards").classList.add("showing");
          carta.classList.add("show");
          carta.style.zIndex = zindex;
            

          zindex++;
        }
        
  });
  
    
}

/*
    Revisar 

      callback es una funcion dentro de otra funcion 
      si una funcion retorna una promesa se puede poner await en frente de la llamada a la funcion
      await solo se puede usar dentro de funciones asincronas
      await esperara a que la promesa retornada de la funcion asincrona, termine 

      async se usa para definir funciones asincronas y estas siempre retornan promesas
      
      for in se usa para iterar en las propiedades de un objeto

      *Recorrer HTMLColletions
      for of se usa para iterar arrays, strings, nodeLists, and HTMLCollections -> (getElementById(), ...class(),....tag(), etc)
      for regular
      convetir la coleccion en un arreglo con array.from() y luego recorrerlo con for each 
                          Array.from(collection).forEach(function (element) {
                        console.log(element)
                    });

      *Hacer fetch con xml
                                fetch("https://codetogo.io/api/users.xml")
                            .then(response => response.text())
                            .then(data => {
                              const parser = new DOMParser();
                              const xml = parser.parseFromString(data, "application/xml");
                              console.log(xml);
                            })
                            .catch(console.error);

        https://www.javascripttutorial.net/javascript-fetch-api/
        https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
        https://www.geeksforgeeks.org/htmlcollection-for-loop/
        https://codetogo.io/how-to-fetch-xml-in-javascript/
        
*/

/*Inicio*/

// Petición async/await
// Convierta la función flecha como async

let cargarLibros = async() => {

    let plantilla, arreglo, contenedor;

    
   
    // Petición async/await
    // Anteponga await a la petición fetch   
    let resultado = await fetch("https://github.com/DAWMFIEC/DAWM-apps/blob/datos/libros.xml")
    
    //let resultado = await fetch("https://dataserverdawm.herokuapp.com/libros/xml")

    // Anteponga await a la conversión de la variable resultado a texto
    let data = await resultado.text()

    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
  
    // Utilice el selector 'libros > libro'
    let books = xml.querySelectorAll('libros > libro')

    books.forEach( book => {

      // Extraiga el contenido del texto para las etiquetas: title, isbn y shortDescription.
      // Utilice el operador condicional ternario para validar la existencia de las etiquetas previo a extraer el contenido del texto
      let thumbnailUrl = book.querySelector('thumbnailUrl')?book.querySelector('thumbnailUrl').textContent:''
      let title = book.querySelector('title')?book.querySelector('title').textContent:''
      let isbn = book.querySelector('isbn')?book.querySelector('isbn').textContent:''
      let shortDescription = book.querySelector('shortDescription')?book.querySelector('shortDescription').textContent:''
      

      plantilla = `
                <div class="card">
                  <div class="card__image-holder">
                    <img class="card__image" src="${thumbnailUrl}" alt="${isbn}" />
                  </div>
                  <div class="card-title">
                    <a href="#" class="toggle-info btn">
                      <span class="left"></span>
                      <span class="right"></span>
                    </a>
                    <h2>
                    ${title}
                    <small>${isbn}</small>
                    </h2>
                  </div>
                  <div class="card-flap flap1">
                    <div class="card-description">
                      ${shortDescription}
                    </div>
                  </div>
                </div>
            `

      document.getElementsByClassName('cards')[0].innerHTML += plantilla

    })

    document.querySelectorAll("div.card").forEach(carta => {
        animarCartas(carta)
    }) 
    
}

/*Fin*/

document.addEventListener("DOMContentLoaded", () => {
    cargarLibros()   
})


module.exports = {
    cargarLibros: cargarLibros
};
