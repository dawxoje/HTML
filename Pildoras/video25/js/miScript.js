var acumulado=0;
var cifra="";
var sumar=false;
var restar=false;
function setNumber(valueButton) {
    var myDisplay=document.getElementById("display");
    myDisplay.value=cifra+valueButton;
    cifra=myDisplay.value;
}
function suma() {
    var myDisplay=document.getElementById("display");    
    acumulado+=parseInt(cifra);
    myDisplay.value=acumulado;
    cifra="";
    sumar=true;    
}
function resta() {
    var myDisplay=document.getElementById("display");
    if(sumar){
        acumulado+=parseInt(cifra);
        myDisplay.value=acumulado;
    }else{
        acumulado-=parseInt(cifra);
    myDisplay.value=acumulado;
    }    
    cifra="";
    sumar=false;
    restar=true;
}
function resultado() {
    var myDisplay=document.getElementById("display");
    if(sumar){
        acumulado+=parseInt(cifra);
        myDisplay.value=acumulado;
    }else if(restar){
        acumulado-=parseInt(cifra);
        myDisplay.value=acumulado;
    }
    acumulado=parseInt(myDisplay.value);
    cifra=0;
}