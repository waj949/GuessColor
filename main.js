// create a function that generate random rgb color 

function generateRgb(){
	var firstColor = Math.floor(Math.random() * 256);
	var secondColor = Math.floor(Math.random() * 256);
	var thirdColor = Math.floor(Math.random() * 256);
	return '('+firstColor + ' ,' + secondColor + ' ,' +thirdColor+')';
}
var test = generateRgb()
console.log(test);

$('body').css('background', 'rgb' + test);