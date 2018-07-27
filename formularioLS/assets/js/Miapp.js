//Esta aplicacion la he relizado yo, antes de ver el video del proyeco, solo he visto el video sobre lo que habia que hacer

//variables
const misTweet=document.getElementById('lista-tweets');
var textos;
const enviar=document.querySelector('#formulario').addEventListener('submit',function(e){
    e.preventDefault();
    let textArea=document.querySelector('#tweet');
    console.log(textArea);
    escribirTweet(textArea);
    textArea.value="";
});

const escribirTweet=function(elemento){
    let etiqueta=document.createElement('p');
    let borrar=document.createElement('span');
    etiqueta.appendChild(document.createTextNode(elemento.value));
    misTweet.appendChild(etiqueta);
    borrar.className="rojo";
    borrar.appendChild(document.createTextNode('x'));
    etiqueta.appendChild(borrar);
    llamar();
    

}



function llamar(){
    textos=document.getElementsByTagName('span');
    textos=Array.from(textos);
    textos.forEach(element => {
            element.addEventListener('click',borrar);
            
        });
}

function borrar(){
    this.parentNode.remove();
}