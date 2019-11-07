// create a function that generate random rgb color 

function generateRgb(){
	var firstColor = Math.floor(Math.random() * 256);
	var secondColor = Math.floor(Math.random() * 256);
	var thirdColor = Math.floor(Math.random() * 256);
	return '('+firstColor + ' ,' + secondColor + ' ,' +thirdColor+')';
}
var test = generateRgb()
console.log(test);

//$('body').css('background', 'rgb' + test);
function fillArrayOfColors(difficulity){
	var acc = 0;
	var arrayOfColors = [];
	if(difficulity === 'easy'){
		acc = 3;
	}
	else if (difficulity === 'medium') {
		acc = 6;
	} else {
		acc = 9;
	} 
	for(i = 0; i < acc; i++){
		arrayOfColors[i] = generateRgb();
	}
	console.log(arrayOfColors);
    return arrayOfColors;
}

var arrayOfColors = fillArrayOfColors('hard');

function fillTheDivs(arrayOfColors){
	for(i = 0; i < arrayOfColors.length; i++){
		$('.'+i).css('background', 'rgb'+ arrayOfColors[i])
	}
}

fillTheDivs(arrayOfColors);

