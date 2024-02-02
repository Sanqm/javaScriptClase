var anterior = 0;
var actual = 1;
var secuencia = "";
function temporizador(){
    if (!anterior) {
        secuencia+=" "+actual;
    }else{
        secuencia+=" - "+actual;
    }
    postMessage(secuencia); // aquí pasamos los mensajes a hmtl que llama al worker 
    aux = anterior + actual;
    anterior = actual;
    actual = aux;
    setTimeout("temporizador()", 500);
}
temporizador();