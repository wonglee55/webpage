// 1 = rock, 2 = paper, 3 = scissor
// computer 1=scissor, 2=rock, 3=paper

function randomGen(value) {
	var guess = 0;
	if (value == -1) {
		guess = document.getElementById("number").value;
	} else {
		guess = value;
	}
	var player = " ";
	if (guess == 3) {
		player = "scissor";
	} else if (guess == 1) {
		player = "rock";
	} else {
		player = "paper";
	}
	document.getElementById("returnStatement").innerHTML = "Your guess was " + player + "<br>";

	var gen = Math.floor(Math.random() * 3) + 1;
	var comp = " ";
	if (gen == 1) {
		comp = "scissor";
	} else if (gen == 2) {
		comp = "rock";
	} else {
		comp = "paper";
	}

	if (guess == gen) {

		document.getElementById("returnStatement").innerHTML += "good guess computer was a " + comp;

	} else if ((guess == 1 && gen == 2) || (guess == 2 && gen == 3) || (guess == 3 && gen == 1)) {
		document.getElementById("returnStatement").innerHTML += "TIED what are the chances";
	}
	else {
		document.getElementById("returnStatement").innerHTML += "you lose computer was a " + comp;

	}

}



	function rollDice() {
		var dice = Math.floor(Math.random() * 6) + 1;
		// document.getElementById("result").innerHTML = dice;
		document.getElementById("result").src = "img/Dice-" + dice;
		if (dice == 1 || dice == 3) {
			document.getElementById("result").src += ".svg";
		} else {
			document.getElementById("result").src += ".png";
		}

	}




