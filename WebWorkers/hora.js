
function countryHour(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var horas ={
        horitas : h,
        minutos : m,
        segundos : s,
    };
    postMessage(horas);
    setTimeout("countryHour()", 1000);
}
countryHour();