'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy elelment

var newElementContent = document.createTextNode('To jest nowy paragraf'); // stwórz nowy tekst dla elementu

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement); // dodaje elelment

istniejacyWezel.removeChild(newElement); // kasuje elelment