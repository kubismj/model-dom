function klikHeader() {
	console.log('Kliknałeś w Header');
}

function alarm(event) {
	event.preventDefault(); // zapobiegamy domyślnej akcji
	console.log('Kliknieto link');
	console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

document.getElementById('title-header').onclick = klikHeader; // Wywołaj funkcję w elemencie o id 'title-header'

var paragraf = document.getElementsByTagName('p')[0];
paragraf.addEventListener('click', klikHeader);
