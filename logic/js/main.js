function rainchecker(){
	let rain = prompt("Is it raining outside? 1 - yes, 0 - No , 3 - I live in Vancouver!");
	if ( rain == 1 || rain == 3) {
		alert("Please take your umbrella with you!");
	}
	else alert("Please don't take your umbrella!")

}


function weather(){
	let cloud = parseInt(prompt("Is it a rainy, snowy, or sunny day? 1 - rainy, 2 - snowy, 3 - sunny, 4 - cloudy"),10);
	switch(cloud)
	{
		case 1: alert("Please wear warm clothes and take your umbrella!");
		break;
		case 2: alert("Please wear warm clothes and take your umbrella and put your boots on!");
		break;
		case 3: alert("Please wear a T-shirt plus your jacket and then wear your sunglasses!");
		break;
		case 4: alert("Please wear your jacket!")
		break;
		default: weather();
	}
}

function fruitgame(){
	let fruit = "apple";
	let userInput = prompt("What is the fruit that you like the most?");

	if ( userInput.toLowerCase() === fruit) {
		console.log("YOU HAVE WON THE PRICE!");
	} else{
		console.log("UNFORTUNATELY, YOU LOST THE GAME, BETTER LUCK NEXT TIME!")
	}
}




function meCount(){
	let i;
	let n = prompt("Please enter your preferred number!");
	for ( i = 1; i <= n; i++) {
		console.log(i);
	}
}













