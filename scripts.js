////function expresion to select element
//const selectElement = (s) => document.querySelector(s);
//
////open the menu on click
//selectElement(s: '.open').addEventListener('click', () => {
//	selectElement(s: '.nav-list').classList.add('active');
//});
//
////to close on click
//selectElement(s: '.close').addEventListener('click', () => {
//	selectElement(s: '.nav-list').classList.remove(tokens:'active');
//});


function myFunction() {
	var element = document.getElementById("myDiv");
	element.classList.toggle("active");
}

function myFunctionff() {
	var elem = document.getElementById("myDiv");
	elem.classList.remove("active");
}