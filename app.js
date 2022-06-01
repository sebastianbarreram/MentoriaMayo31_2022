import { data } from "./data.js";



var body = document.getElementsByTagName("body")[0];

// Crea un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");
const tblBody = document.createElement("tbody");

let headerTabla = document.createElement("tr");
var celda1 = document.createElement("th");
celda1.innerText = "Nombre ";
var celda2 = document.createElement("th");
celda2.innerText = "Apellido";
var celda3 = document.createElement("th");
celda3.innerText = "Edad";
var celda4 = document.createElement("th");
celda4.innerText = "Correo";
var celda5 = document.createElement("th");
celda5.innerText = "Teléfono";
headerTabla.append(celda1, celda2, celda3, celda4, celda5);
tblBody.appendChild(headerTabla);



data.forEach((element, index, array) => {
    let fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    celda1.textContent = element.nombre;
    var celda2 = document.createElement("td");
    celda2.textContent = element.apellidos;
    var celda3 = document.createElement("td");
    celda3.textContent = element.edad;
    var celda4 = document.createElement("td");
    celda4.textContent = element.email;
    var celda5 = document.createElement("td");
    celda5.textContent = element.telefono;
    fila.append(celda1, celda2, celda3, celda4, celda5)
    tblBody.appendChild(fila);


});

// posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tabla);

tabla.setAttribute("border", "2");