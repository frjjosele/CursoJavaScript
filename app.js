//Function declaration

// function saludar(){
//       console.log("Hola Miguel");
// }

// saludar();


function saludar(nombre){
      console.log(`Hola ${nombre}`);
}

saludar("Ana");//resultado: Hola Ana
saludar("Juan");//resutlado:Hola Juan


function sumar(a,b){
      console.log(a+b);
}

sumar(1,2);
sumar(3,4);

//funciones con retorno
let suma;
function sumar(a,b){
      return a+b;
}

suma=sumar(1,2);
console.log(suma); //resutlado:3
suma=sumar(3,4);
console.log(suma);//resultado: 7



//Valores por defecto
      //valores por defecto. Forma vieja

      //Tipo de funcion: function declaration. POr la forma en declarar las  funciones
function saludar(nombre){
      if(typeof nombre === undefined){
            nombre="Visitante";
      }
      return `hola ${nombre}`;
}

      //Valores por defecto.Forma nueva

      function saludar(nombre="Visitante"){
            return `hola ${nombre}`;
      }


      //Funtion expression. Delcaracion de la funcion en una variable. Es lo mas nuevo

      const suma =function(a=3,b=4){
            return a+b;
      }

      console.log(suma(1,2));

      console.log(suma(5));
