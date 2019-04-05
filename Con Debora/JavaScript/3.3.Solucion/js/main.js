window.onload=function(){
    creaPagina();
    creaEstilos();
}

function creaPagina(){
    
    insertElementText("h1","Gaspatxo");
    
    var marco=document.createElement("img");
    var figura=document.createElement("figure");
    var ruta="./img/gaspatxo.jpg";
    figura.appendChild(marco);
    document.body.appendChild(figura);
    marco.setAttribute("src",ruta);//aqui tambien intente referenciar el mediente getElementsbyTagName[0] y fallo

    insertElement("hr");

    insertElementText("h2","Ingredients");
    
    var listaDesordenada=document.createElement("ul");
    document.body.appendChild(listaDesordenada);

    var itemLista=[
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li")
    ]
    var contenidoItemLista=[
        document.createTextNode("Tomaca"),
        document.createTextNode("Pebrot verd"),
        document.createTextNode("Cogombre"),
        document.createTextNode("All"),
        document.createTextNode("Oli"),
        document.createTextNode("Vinagre"),
        document.createTextNode("Sal"),
        document.createTextNode("Aigua")
    ]
    appendLI(0);
    appendLI(1);
    appendLI(2);
    appendLI(3);
    appendLI(4);
    appendLI(5);
    appendLI(6);
    appendLI(7);
    /*for (var i = 0; i < itemList.length; i++) {
        appendLI(i);  Porque esto no va?==???
    }*/

    function appendLI(num) {
        itemLista[num].appendChild(contenidoItemLista[num]);
        /*Aqui intente referenciar ul mediente getElementsbyTagName[0] y fallo*/
        listaDesordenada.appendChild(itemLista[num]);
    }
    /*insertElementText("h1","Gaspatxo");
    insertElementImagen("./img/gaspatxo.jpg");
    insertElement("hr");
    insertElementText("h2","Ingredients");
    insertElement("ul");
    insertSubElementText("li","ul");*/
}

function creaEstilos(){
    var cuerpoStyle=document.body.style;
    cuerpoStyle.margin="25%";
    cuerpoStyle.border="20px solid blue";
    cuerpoStyle.backgroundColor="grey";

    var titutoStyle=document.querySelector("h1").style;
    titutoStyle.textDecoration="underline";
    titutoStyle.backgroundColor="white";
    titutoStyle.border="1px solid red";
    titutoStyle.height="60px";
    titutoStyle.width="50%";
    titutoStyle.marginLeft="10%";
    titutoStyle.padding="15px";
    titutoStyle.paddingLeft="30%";

    var figuraStyle=document.querySelector("figure").style;
    figuraStyle.backgroundColor="white";
    figuraStyle.width="310px";
    figuraStyle.height="200px";
    figuraStyle.paddingLeft="25px";
    figuraStyle.paddingTop="10px";
    figuraStyle.border="1px solid red";

    var subTituloStyle=document.querySelector("h2").style.display="none";

    var listaDesordenadaStyle=document.querySelector("ul").style;
    listaDesordenadaStyle.backgroundColor="yellow";
    listaDesordenadaStyle.border="1px solid red";
    listaDesordenadaStyle.height="150px";
    listaDesordenadaStyle.width="150px";
    listaDesordenadaStyle.marginLeft="25%";
    listaDesordenadaStyle.paddingTop="10px";

    var primerIngredienteStyle=document.querySelectorAll("li")[0].style;
    primerIngredienteStyle.color="Red";
    primerIngredienteStyle.fontWeight="Bold";
    var ultimoIngredienteStyle=document.querySelectorAll("li")[document.querySelectorAll("li").length-1].style;
    ultimoIngredienteStyle.color="Blue";
    ultimoIngredienteStyle.fontWeight="Bold";
}

function insertElement(elemento) {
    var etiqueta=document.createElement(elemento);
    document.body.appendChild(etiqueta);
}
function insertElementText(elemento,texto){
    /*Aqui intente llamar a insertElement pero me daba fallo*/
    var etiqueta=document.createElement(elemento);
    document.body.appendChild(etiqueta);
    var contenido=document.createTextNode(texto);
    etiqueta.appendChild(contenido);
}
/*
function insertSubElement(elemento,elementoPadre) {
    insertElementText(elemento,texto);
}

function insertElementImagen(path) {
    insertElement("img");
    var ruta=path;
    etiqueta.setAttribute("src",ruta);
}*/
