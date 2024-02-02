
/* idem que para el procesamientos de imagenes pero aplicado a los titulares con sus noticias */
noticias = [];
xmlhttp = new XMLHttpRequest ();
url = "noticias.json";

function getNoticias(datos){
    for (i = 0; i < datos.length; i++) {
        registros = {};
        registros.titular = datos[i].titular;
        registros.texto = datos[i].texto;
        noticias[i] = registros;
       
        
    }
}
function procesarNoticias(){
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            datos = JSON.parse(this.responseText);
            getNoticias(datos);
            postMessage(noticias);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("procesarNoticias()", 5000);
}

procesarNoticias();