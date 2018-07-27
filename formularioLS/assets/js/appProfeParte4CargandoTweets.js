//Aplicacion realizada por el profesor en principio esta aplicacion es mucho mejor

//Creamos variable para el identificador de la lsita de los tweet

const listaTweet=document.getElementById('lista-tweets');

//Ejecutamos una funcion que es para escuchar el evento submit

eventListener();

//declaramos la funcion eventListener

function eventListener(){
    //A la escucha del click en submit le agregamos otra funcion: agregarTweet
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //Borrar tweet

    listaTweet.addEventListener('click',borrarTweet);

    //cargar el contenido del localStorage al DOM
    //DOMContentLoaded es un evento que se activa cuando toda la pagina este cargada
    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//LOCALSTORAGE
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

    //Añadiendo al localStorage
    agregarTweetLocalStorage(tweet);
}

//DELEGATION
//elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    //Usmamos delegation para indicar que solo se borre cuando pulsemos sobre la X de la lista. 
    //Esto es porque añadimos <a>X</a> una clase

    if(e.target.className==='borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('Tweet eliminado');
    }
}


//LOCALSTORAGE
//agrega el tweet a local storage

function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir de string a JSON para el localStorare
    localStorage.setItem('tweets',JSON.stringify(tweets));


}

//Comprobar que haya elmento en localStorage, devulve un array
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos los valores de local Storage
    if(localStorage.getItem('tweets')===null){
        tweets = [];
    }
    else{
        //Nos devuelve el contenido del localStorage
        tweets= JSON.parse(localStorage.getItem('tweets'));
        //tweets=JSON.parse(tweets);
    }
    return tweets;
}


//Mostrar datos del localStorage a la lista

function localStorageListo(){
    let tweets;

    tweets=obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
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

    });
}