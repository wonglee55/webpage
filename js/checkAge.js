$("#age").change(function() {
	// alert (document.getElementById("age"))
	if (document.getElementById("age").value < 10) {
		document.getElementById("ageCheck").innerHTML = "please enter an older age";
	}
});