function canviPag(){
    var deseaCambio=confirm("¿Desea cambiar de pagina?");
    if(deseaCambio){
        alert("Cambiando de pagina...");/*No entiendo como hacerlo en un p*/
        setTimeout(window.open("https://www.google.es/","_self"),3000);
    }else{
        alert("Pueh aqui nos quedamos :D");
    }
}

function obreNovaFinestra(){
    window.open("https://www.google.es/");
}