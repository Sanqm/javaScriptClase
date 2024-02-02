var vel=1000;
var contador = 0;
onmessage = function(event){
    vel = event.data;
};

function velocimetro(){
    postMessage(contador);
    contador++;
    setTimeout (velocimetro (), vel);
}

velocimetro();