/*
    Revisar 
        https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/
        https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
        https://www.javascripttutorial.net/javascript-dom/javascript-textcontent/
*/

function byId() {

    let elemento;
    /*
        Obtenga el elemento por el identificador "nombre" y asigne el resultado a la variable elemento
        Asigne el contenido (textContent) del elemento con el valor 'Muhammed Erdem'
    */


    /*Inicio*/
    elemento = document.getElementById("nombre");
    elemento.textContent = 'Muhammed Erdem'
    /*Fin*/
}

/*
    Revisar 
        https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
        https://www.javascripttutorial.net/javascript-dom/javascript-textcontent/
*/

function byClass() {

    let arreglo;
    let elemento;

    /*
        Obtenga los elementos por la clase 'profile-card-loc__txt' y asigne el resultado a la variable arreglo
        Asigne el primer valor del arreglo a la variable elemento
        Coloque el contenido (textContent) del elemento con el valor 'Istanbul, Turkey'
    */


    /*Inicio*/
    arreglo = document.getElementsByClassName('profile-card-loc__txt')
    elemento = arreglo[0]   
    elemento.textContent = 'Istanbul, Turkey'
    /*Fin*/

}


/*
    Revisar 
        https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
        returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.
        automatically updated when elements with the matching tag name are added and/or removed from the document.
        
        https://www.javascripttutorial.net/javascript-dom/javascript-setattribute/

*/

function byTagName() {

    let arreglo;
    let elemento;

    /*
        Obtenga los elementos por la etiqueta 'img' y asigne el resultado a la variable arreglo
        Asigne el primer valor del arreglo a la variable elemento
        Coloque el atributo (setAttribute) 'src' del elemento con el valor 'https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg'
    */
    arreglo = document.getElementsByTagName('img')
    elemento = arreglo[0]
    elemento.setAttribute('src','https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg')

    /*Inicio*/
    
    /*Fin*/

}


/*
    Revisar 
        https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
        https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/
*/

function querySelector() {

    let elemento;
    let textoHTML = `
          <div class="profile-card-inf__item">
            <div class="profile-card-inf__title">1598</div>
            <div class="profile-card-inf__txt">Followers</div>
          </div>

          <div class="profile-card-inf__item">
            <div class="profile-card-inf__title">65</div>
            <div class="profile-card-inf__txt">Following</div>
          </div>

          <div class="profile-card-inf__item">
            <div class="profile-card-inf__title">123</div>
            <div class="profile-card-inf__txt">Articles</div>
          </div>

          <div class="profile-card-inf__item">
            <div class="profile-card-inf__title">85</div>
            <div class="profile-card-inf__txt">Works</div>
          </div>
    `

    /*
        Obtenga el elemento por el selector 'div.profile-card-inf' y asigne el resultado a la variable elemento
        Coloque el HTML interno (innerHTML) del elemento con el valor de la variable textoHTML
    */


    /*Inicio*/
    elemento = document.querySelector('div.profile-card-inf')
    elemento.innerHTML = textoHTML
    /*Fin*/

}


module.exports = {
    byId: byId,
    byClass: byClass,
    byTagName: byTagName,
    querySelector: querySelector
};
