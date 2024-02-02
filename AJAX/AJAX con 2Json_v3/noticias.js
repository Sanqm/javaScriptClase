noticias = []; // creamos array que almacenará lo objetos con las duplas del json
xmlhttp = new XMLHttpRequest (); // creamos el objeto para la petición de datos 
url = "gatitos.json"; // variable que almacena la ruta a nuestro archivo 

/* Esta función pasandole los datos parseados del json crea un objeto regisgros donde almacena las instancias 
del json y  almacena el objeto devuelo en un array */
function getGatitos(datos){
    for (i = 0; i < datos.length; i++) {
        registros = {};
        registros.url = datos[i].url;
        registros.pie = datos[i].pie;
        noticias[i] = registros;
       
        
    }
}

/* Esta función realiza la petición de informacion y llama a la funcion que contruye el array de objetos que posteriormente 
será pasado a la vista a través del worker */
function procesarGatitos(){
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ // comprobamos conexion y si ok
            datos = JSON.parse(this.responseText); // decodificamos el json 
            getGatitos(datos); // con los datos obtenidos los pasamos a la función para que contruya el array de objetos 
            postMessage(noticias); // enviamos las respuesta al worker con el array resultante
        }
    };
    xmlhttp.open("GET", url, true); // abrimos la conexion 
    xmlhttp.send(); // enviamos datos 
    setTimeout("procesarGatitos()", 5000); // controlamos el tiempo cada cuanto se realizaran las peticiones
}

procesarGatitos(); // llamamos a la función para iniciar el programa

