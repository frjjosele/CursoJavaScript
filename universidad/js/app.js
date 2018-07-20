//click en el buscador
document.querySelector('#submit-buscador').addEventListener('click',function(e){
    e.preventDefault();//detenemos la accion por defecto del elemento. Por ejemplo el submit por defecto va a llevarte a la pagina que se encuentra en el action del form. Como en esta ocasion no queremos eso por eso lo paramos
    alert("Buscando cursos");
});

function ejecutarBoton(e){
    e.preventDefault();
    console.log("Desde la funcion ejecutar boton");

    console.log(e);//Nos muestra la informacion relacionada con el evento

    e.target;//target nos muestra el elemento al que hemos realizado en evento
    console.log(e.target);

    console.log(e.target.ClassName);

    console.log(e.target.innerText);
}