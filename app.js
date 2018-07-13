const numero1="50",
      numero2=10,
      numero3="tres";


console.log(numero1+numero2);


//Principal motivo para pasar de un string a un numero es por ejemplo esto:
console.log(numero1+numero2);// resultado: 5010

//Tenemos que pasarlo a un entero: parseInt()

console.log(parseInt(numero1)+numero2); //Resultado correcto: 60

    //Por el contrario en la resta no hace falta
    console.log(numero1-numero2); //Resultado correcto

    let dato;
    dato=Number("20");

    console.log(typeof(dato));
    
    dato=20.0454512121

    console.log(dato.toFixed(2));//20.05
    console.log();



    let cp;

    cp=90210;
    //Los datos tipo number no se pueden contar el numero de digitos
    console.log(cp.length); //resultado:  undefined

    let dato="4"+"4";
      console.log(dato.length);//resultado:2 , porque contiene 2 letras

      dato=true; //booleano
      console.log(dato.length);//resultado: undefined

      //Convirtiendo a tipo string: String()

      console.log(String(dato).length);//Resultado: 4;

      //toString();
      dato=555;
      dato=dato.toString();
      console.log(dato.length);//resultado: 3

      Ya es un string por lo tanto puede usar todos los metodos de los string
