var miLista=document.getElementById("llista");
elementoExtra=document.createElement("li ");
var contenido1=document.createTextNode("Pellentesque massa ante,");
var contenido2=document.createTextNode("ornare id, aliquam vitae");
var repeticiones=0;
function afegeix() {
    miLista.appendChild(elementoExtra);
    
    if(repeticiones==0){
        elementoExtra.appendChild(contenido1);
    }else if(repeticiones==1){
        elementoExtra.appendChild(contenido2);
    }
    repeticiones++;   
}