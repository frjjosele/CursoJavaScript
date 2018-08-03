//Variables
const carrito= document.getElementById('carrito');
const cursos=document.getElementById('lista-cursos');

//Listener
cargarEventListener();
function cargarEventListener(){
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click',comprarCurso);
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
    console.log(curso);
}