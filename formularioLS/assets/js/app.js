const formulario=document.querySelector('#formulario');
const listaTweet=document.querySelector("#lista-tweets");
const textArea=document.querySelector("#tweet");


eventos();

function eventos(){
    textArea.value="";
    formulario.addEventListener('submit',agregarTweet);
    listaTweet.addEventListener('click',borrarTweet);
    window.onload=mostrarContenidoLocalStorage;
    //document.addEventListener('DOMContentLoaded',mostrarContenidoLocalStorage);
}


function agregarTweet(e){
    e.preventDefault();
    //creamos un hijo lista en el div
    let lista=document.createElement('li');
    let borrar=document.createElement('a');
    lista.appendChild(document.createTextNode(textArea.value));

    //borrar.appendChild(document.createTextNode('X'));
    borrar.innerText="X";
    borrar.classList="borrar-tweet";
    lista.appendChild(borrar);
    listaTweet.appendChild(lista);

    //LocalStore
    agregarLocalStore(textArea.value);
}


function borrarTweet(e){
    //Delegation
    if(e.target.className=="borrar-tweet"){
        e.target.parentElement.remove();
        borrarLocalStorage(e);
    }

}

//Guardar datos
function agregarLocalStore(dato){
    let array;
    array=obtenerDatosLocalStorage();
    array.push(dato);
    localStorage.setItem("datos",JSON.stringify(array));
    
}


//Obtener datos del localStorage
function obtenerDatosLocalStorage(){
    let arrayAux;
    if(localStorage.getItem("datos")===null){
        arrayAux=[];
    }
    else{
        arrayAux=JSON.parse(localStorage.getItem("datos"));
        
    }
    return arrayAux;
   
    
}


//mostramos el contenido del localStorage
function mostrarContenidoLocalStorage(){
    let array;
    array=obtenerDatosLocalStorage();

    array.forEach(contenido => {
         //creamos un hijo lista en el div
    let lista=document.createElement('li');
    let borrar=document.createElement('a');
    lista.appendChild(document.createTextNode(contenido));

    //borrar.appendChild(document.createTextNode('X'));
    borrar.innerText="X";
    borrar.classList="borrar-tweet";
    lista.appendChild(borrar);
    listaTweet.appendChild(lista);
        
    });
   


}


//borrar contenido del localStorage
function borrarLocalStorage(e){
    let contenido;
    let arrayLocalStorage;
    contenido=e.target.parentElement.innerText;
    contenido=contenido.slice(0,contenido.length-1);
    arrayLocalStorage=obtenerDatosLocalStorage();
    arrayLocalStorage.forEach(function(elemento,index){
        if(elemento==contenido){
            arrayLocalStorage.splice(index,1);
        }
    });
    localStorage.setItem("datos",JSON.stringify(arrayLocalStorage));
}