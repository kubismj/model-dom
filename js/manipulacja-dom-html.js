'use strict';

var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej 

var tresc = mainHeader.innerHTML;
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; //dodajemy treść nagłówka

//console.log(link);

var link = document.getElementsByClassName('link')[0];

link.href = "http://akademia108.pl"; // nadpisujemy atrybut href w link

link.className  = 'nowa-klasa'; // nadpisujemy nazwę klasy w linku

link.style.color = '#11aa22'; //dodajemy styl

