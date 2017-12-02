function checkAnswers() {
	if (document.getElementById("age").value < 10) {
		alert("Sorry " + document.getElementById("name").value + ", you are too young \n come back when you are over 10 years old noob")
	} else {
	correct = 0
	if (document.getElementById("1a").checked) {
		correct = correct + 1
	} else {
		document.getElementById("1q").innerHTML = "No he did not start with that!"
	}
	if (document.getElementById("2b").checked) {
		correct = correct + 1
	} else {
		document.getElementById("2q").innerHTML = "Actually thats not right"
	}
	if (document.getElementById("3b").checked) {
		correct = correct + 0.5
	}
	if (document.getElementById("3d").checked) {
		correct = correct + 0.5
	} 
	if (document.getElementById("3b").checked && document.getElementById("3d").checked) {

	} else if(document.getElementById("3b").checked || document.getElementById("3d").checked){
		document.getElementById("3q").innerHTML = "thats not all of them"
	} else {
		document.getElementById("3q").innerHTML = "you didn't get any right"
	}
	if (document.getElementById("4").value == 151) {
		correct = correct + 1
	} else {
		if (document.getElementById("4").value > 151) {
			document.getElementById("4q").innerHTML = "thats too much, there are less"
		} else {
			document.getElementById("4q").innerHTML = "thats too little, there's more"
		}
	}
	if(document.getElementById("5").value == "5c") {
		correct = correct + 1
	} else {
		document.getElementById("5q").innerHTML = "Ash is not from there"
	}
	if(document.getElementById("6e").checked) {
		correct = correct + 1
	} else {
		document.getElementById("6q").innerHTML = "Not just that place"
	}
	if(document.getElementById("7").value.toLowerCase() == "kanto") {
		correct = correct + 1
	} else {
		document.getElementById("7q").innerHTML = "thats  not where he is from"
	}
	if(document.getElementById("8b").checked) {
		correct = correct + 1
	} else {
		document.getElementById("8q").innerHTML = "What Really?!?!?" 
	}
	if (correct == 8) {
		window.location.href = "congrats.html?name=" + document.getElementById("name").value
	} else {
		alert("Hi "+ document.getElementById("name").value + "\n you answered: " + correct + "/8")
	}
	return false
}
}