'use stict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.nodeType);

