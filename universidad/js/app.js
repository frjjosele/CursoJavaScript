document.body.addEventListener('click',eliminarElemento);

function eliminarElemento(e){
    e.preventDefault();

    console.log('click');

    console.log(e.target.classList);


//Como hemos seleccionado el body, solo queremos que actuen sobre los elementos de la clase borrar-curso. Para eso usamos el constains('nombre de la clase') del classList
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }

    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado');
    }

}
