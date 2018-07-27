//Aplicacion realizada por el profesor en principio esta aplicacion es mucho mejor

//Creamos variable para el identificador de la lsita de los tweet

const listaTweet=document.getElementById('lista-tweets');

//Ejecutamos una funcion que es para escuchar el evento submit

eventListener();

//declaramos la funcion eventListener

function eventListener(){
    //A la escucha del click en submit le agregamos otra funcion: agregarTweet
    document.querySelector('#formulario').addEventListener('click',agregarTweet);

    //Borrar tweet

    listaTweet.addEventListener('click',borrarTweet);
}

function agregarTweet(e){
    //como es un submit, tenemos que quitarle su comprotamiento por defecto para añadir el nuestro.
    e.preventDefault();

    //Obtenemos el valor de tweet area
    const tweet=document.querySelector('#tweet').value;

    //creamos un boton borrar el el div de las lista
    const borrar=document.createElement('a');
    borrar.classList="borrar-tweet";
    borrar.innerText="X";
    //creamos un elemento de tipo lista para añadirlo 
    const li=document.createElement('li');

    //agregamos el elemento lista creado como hijo del div que contiene la lista tweet
    listaTweet.appendChild(li);

    //agregamos el boton borrar a la lista
    li.appendChild(borrar);

    //Agregamos a este <li> (elemento de la lista), el texto del texArea
    //tambien nos sivre:
    //li.innerText=tweet
    li.appendChild(document.createTextNode(tweet));
}

//DELEGATION
function borrarTweet(e){
    e.preventDefault();
    //Usmamos delegation para indicar que solo se borre cuando pulsemos sobre la X de la lista. 
    //Esto es porque añadimos <a>X</a> una clase

    if(e.target.className==='borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('Tweet eliminado');
    }
}