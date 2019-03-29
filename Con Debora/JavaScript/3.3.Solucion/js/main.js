window.onload=function(){
    creaPagina();
    creaEstilos();
}

function creaPagina(){
    var titulo=document.createElement("h1");
    var textoTitulo=document.createTextNode("Gaspatxo");
    document.body.appendChild(titulo);
    titulo.appendChild(textoTitulo);
    
    var marco=document.createElement("img");
    var ruta="./img/gaspatxo.jpg";
    document.body.appendChild(marco);
    marco.setAttribute("src",ruta);

    var linea=document.createElement("hr");
    document.body.appendChild(linea);

    var subTitulo=document.createElement("h2");
    var textoSubTitulo=document.createTextNode("Ingredients");
    document.body.appendChild(subTitulo);
    subTitulo.appendChild(textoSubTitulo);

    var listaDesordenada=document.createElement("ul");
    document.body.appendChild(listaDesordenada);

    var itemLista=document.createElement("li");
    var contenidoItemLista=document.createTextNode("Tomaca");
    itemLista.appendChild(contenidoItemLista);
    listaDesordenada.appendChild(itemLista);

    contenidoItemLista=document.createTextNode("Pebrot verd");
    itemLista.appendChild(contenidoItemLista);
    listaDesordenada.appendChild(itemLista);
    /*insertElementText("h1","Gaspatxo");
    insertElementImagen("./img/gaspatxo.jpg");
    insertElement("hr");
    insertElementText("h2","Ingredients");
    insertElement("ul");
    insertSubElementText("li","ul");*/
}

function creaEstilos(){
    
}
/*
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
}*/
