const formulario=document.querySelector('#formulario');
const listaTweet=document.querySelector("#lista-tweets");
const textArea=document.querySelector("#tweet");


eventos();

function eventos(){
    formulario.addEventListener('submit',agregarTweet);
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

}