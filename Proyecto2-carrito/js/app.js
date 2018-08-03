//Variables
const carrito= document.getElementById('carrito');
const cursos=document.getElementById('lista-cursos');
const listaCursos=document.querySelector('#lista-carrito tbody');

//Listener
cargarEventListener();
function cargarEventListener(){
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click',comprarCurso);

    //eliminamos un curso del carrito
    listaCursos.addEventListener('click',eliminarCurso);
}


//Funciones

//funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();//Como peude ser cualquier cosa le quitamos su comportamiento

    //Usamos delegation para saber que hemos hecho click en el enlace (boton)agregar carrito
    
    
    //className devulve todas las clases como si fuera un string:
        //"u-full-width button-primary button input agregar-carrito"
    //classList devuelve un DOMtokenList
        /*0: "u-full-width"
        ​​
        1: "button-primary"
        ​​
        2: "button"
        ​​
        3: "input"
        ​​
        4: "agregar-carrito"*/
    
        // if(e.target.className.indexOf('agregar-carrito')!=-1){

        // }

        if(e.target.classList.contains('agregar-carrito')){
            //buscamos el div padre del curso, que contine todo sobre lo relacionado con el curso seleccionado (imagen,nombre,autor,..)
            const curso=e.target.parentElement.parentElement;

            leerDatosCurso(curso);
        }

}


//lee los datos del curso seleccionado (pulsar agragar carrito)

function leerDatosCurso(curso){
    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,//textContent, innerText innerHTML: https://developer.mozilla.org/es/docs/Web/API/Node/textContent
        precio: curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id')


    };

    insertarCarrito(infoCurso);
}


//muestra el curso seleccionado en el carrito

function insertarCarrito(curso){

    const row=document.createElement('tr');
    row.innerHTML=`
      <td><img src="${curso.imagen}" width="100"</td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;

    listaCursos.appendChild(row);

}


//eliminamos el curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    let curso;

    //Delegation
    if(e.target.classList.contains('borrar-curso')){
        curso=e.target;
        curso.parentElement.parentElement.remove();

    }
}


//Aprendido

//e.target.classList.contains('agregar-carrito'), usar contains, para buscar un elemento en un DOMtokenList, en lugar de pasarlo a cadena o vector y buscarlo tu

//const curso=e.target.parentElement.parentElement; --> Usar Delegation, le decimos que haga click en casi todo el DOM, con delegation le decimos que si ha hehco click en una etirqutea (a), que teine la clase="añadir al carrito", a raiz de esa etiqueta obtenemos el padre del padre que es el div con toda la informacion relacionada de esa etqieuta y clase


/*const infoCurso={
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,//textContent, innerText innerHTML: https://developer.mozilla.org/es/docs/Web/API/Node/textContent
    precio: curso.querySelector('.precio span').textContent,
    id:curso.querySelector('a').getAttribute('data-id')


};*/ //Podemos seleccionar asi la informacion  


// curso.querySelector('img').src, podemos seleccionar un elemento dentro de un div a partir de querySelector. Es decir que para usar querySelector no necesitamos usar document.

//Agregar codigo html a otra etiqueta usando innerHTML;
    /*const row=document.createElement('tr');
        row.innerHTML=`
      <td><img src="${curso.imagen}" width="100"</td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;*/ //Pero no sustituye a appendChild.


 //Delegation: es muy util para intereactuar con elementos creados dinamicamente
 //if(e.target.classList.contains('borrar-curso')){}