// create a function that generate random rgb color 

function generateRgb(){
	var firstColor = Math.floor(Math.random() * 256);
	var secondColor = Math.floor(Math.random() * 256);
	var thirdColor = Math.floor(Math.random() * 256);
	return '('+firstColor + ' ,' + secondColor + ' ,' +thirdColor+')';
}


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
    return arrayOfColors;
}

var arrayOfColors = fillArrayOfColors('hard');
console.log(arrayOfColors);

function fillTheDivs(arrayOfColors){
	for(i = 0; i < arrayOfColors.length; i++){
		$('.'+i).css('background', 'rgb'+ arrayOfColors[i]);
	}
}

fillTheDivs(arrayOfColors);
var correctIndex = Math.floor(Math.random() * 9);
var correctOne  = arrayOfColors[correctIndex];
console.log(correctOne);

function win(){
	$('.' + correctIndex).on('click', function(){
		for(i = 0; i < arrayOfColors.length; i++){
			$('.'+i).css('background', 'rgb'+ arrayOfColors[correctIndex]);
		};
		window.setTimeout( function(){
			var $winnerDiv = $('<div id = "win"> <p id = "win-message">Congratulation You Won !</p> </div>');
			$('.grid-container').replaceWith($winnerDiv);
		} , 1000);		
	});		
}

win();


function lose(){
	var clicks = 0;
	var arrOfIndexes = []
	for(let i = 0; i < arrayOfColors.length; i++){
		arrOfIndexes.push(i);
	};
	arrOfIndexes.splice(correctIndex, 1)
	console.log(arrOfIndexes);
	
		for(let i = arrOfIndexes[0]; i < arrOfIndexes.length; i++){
			$('.' + i).on('click', function(){
				var $nope = $('<div id="nope"><p id="no"> Nope!</br> Try again </p></div>')
				if(i !== correctIndex){
					$('.' + i).replaceWith($nope);
				}
				clicks++;
				console.log(clicks)
				if(clicks === 3){
					var $gameOver = $('<div id ="game-over"><p id="over">Game Over</p></div>');
					$('.grid-container').replaceWith($gameOver);

				}
			});
		}
	}
	

	


lose();



