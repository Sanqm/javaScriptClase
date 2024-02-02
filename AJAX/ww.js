personas = []; // creamos un array para almacenar los objetos de json que enviaremos al worker

xmlhttp = new XMLHttpRequest (); // creamos un objeto request para la comunicación con el server
url = "datos.json"; // creamos una variable que almacena la ruta del archivo json 


/*esta funcion  pasados los datos que hay en el json recorre el mismo 
y crea un objeto donde almacenará los diferentes campos*/
function getDatos(datos){
    for (let i = 0; i < datos.length; i++) {
        registro =  {}; // objeto que almacenará los registros del json
         registro.nombre = datos[i].nombre; // metemos dentro del objeto los datos 
         registro.edad = datos[i].edad;
         personas[i] = registro; // guardamos en el arrya de personas el objeto de registros con los datos del json
    }
}

/*Esta función  accede al archivo json  llama a la función que procesa 
los datos del mismo y se los envia de vuelta al worker*/ 
function proceso(){
    xmlhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status ==200) {
            datos = JSON.parse(this.responseText); // variable que almacena los datos del json parseados 
            getDatos(datos); // esos datos se envia a la función datos para que los almacene
            postMessage(personas); // se le envian al worker
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("proceso()", 5000);
    /*por ultimo abrimos conexion enviamos al sevidor y dentro de un timeout hacemos que el proceso se remita cada 5s*/
}
proceso();// llamamos a la función que lo inicia todo 
