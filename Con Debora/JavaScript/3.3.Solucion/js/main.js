window.onload=function(){
    creaPagina();
    creaEstilos();
}

function creaPagina(){
    insertElementText("h1","Gaspatxo");
    insertElementImagen("./img/gaspatxo.jpg");
    insertElement("hr");
    insertElementText("h2","Ingredients");
    insertElement("ul");
    insertSubElementText("li","ul");
}

function creaEstilos(){
    
}

function insertElement(elemento) {
    var etiqueta=document.createElement(elemento);
    document.body.appendChild(etiqueta);
}
function insertSubElement(elemento,elementoPadre) {
    insertElementText(elemento,texto);
}
function insertElementText(elemento,texto){
    insertElement(elemento);
    var contenido=document.createTextNode(texto);
    etiqueta.appendChild(contenido);
}
function insertElementImagen(path) {
    insertElement("img");
    var ruta=path;
    etiqueta.setAttribute("src",ruta);
}
