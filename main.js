$( document ).ready(function() {
  // create a function that generate random rgb color
	//generate an rgb color
  function generateRgb(){
	var firstColor  = Math.floor(Math.random() * 256);
	var secondColor = Math.floor(Math.random() * 256);
	var thirdColor  = Math.floor(Math.random() * 256);

	return '( '+firstColor + ', ' + secondColor + ', ' +thirdColor+' )';
};

// fill the array of colors with random rgb colors
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


// fill the divs with random colors
function fillTheDivs(arrayOfColors){
	for(i = 0; i < arrayOfColors.length; i++){
		$('.'+i).css('background', 'rgb'+ arrayOfColors[i]);
	}
}

fillTheDivs(arrayOfColors);
// choose a corect one randomly
var correctIndex = Math.floor(Math.random() * 9);
var correctOne  = arrayOfColors[correctIndex];
// appending the correct div to the top of the page
$('#rgb').text('RGB Color: ' + correctOne);


// win function will append the win div if the user clicked on the right choice
function win(){
	var $winnerDiv = $('<div id = "win"> <p id = "win-message">Congratulation You Won !</p> </div>');
	$('.' + correctIndex).on('click', function(){
		for(i = 0; i < arrayOfColors.length; i++){
			$('.'+i).css('background', 'rgb'+ arrayOfColors[correctIndex]);
		};
		window.setTimeout( function(){
			$('.grid-container').replaceWith($winnerDiv);
		} , 800);		
	});		
};

win();

// lose function keeps track of your wrong answers .. if u made 2 wrong choices u get game over
function lose(){
	var $gameOver = $('<div id ="game-over"><p id="over">Game Over</p></div>');
	var clicks = 0;
	// this array will hold the indexes of the div to acces them later with jQuery
	var arrOfIndexes = []
	for(let i = 0; i < arrayOfColors.length; i++){
		arrOfIndexes.push(i);
	};
	// removing the correct one
	arrOfIndexes.splice(correctIndex, 1)
	 // if the wrong one is clicked u have the Nope! try again div
		for(let i = arrOfIndexes[0]; i <= arrOfIndexes.length; i++){
			$('.' + i).on('click', function(){
				var $nope = $('<div id="nope"><p id="no"> Nope!</br> Try again </p></div>')
				if(i !== correctIndex){
					$('.' + i).replaceWith($nope);
				}
				clicks++;
				// if clicks are up to 3 the game is over 
				if(clicks === 3){
				   $('.grid-container').replaceWith($gameOver);
				}
			});
		}
	}
 lose();
});













