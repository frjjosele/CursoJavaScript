//Aplicacion realizada por el profesor en principio esta aplicacion es mucho mejor


//Ejecutamos una funcion que es para escuchar el evento submit

eventListener();

//declaramos la funcion eventListener

function eventListener(){
    //A la escucha del click en submit le agregamos otra funcion: agregarTweet
    document.querySelector('#formulario').addEventListener('click',agregarTweet);
}

function agregarTweet(e){
    //como es un submit, tenemos que quitarle su comprotamiento por defecto para añadir el nuestro.
    e.preventDefault();

    //Obtenemos el valor de tweet area
    const tweet=document.querySelector('#tweet').value;

    //creamos un elemento de tipo lista para añadirlo 
    const li=document.createElement('li');
    //Agregamos a este <li> (elemento de la lista), el texto del texArea

    li.appendChild(document.createTextElement(tweet));
}