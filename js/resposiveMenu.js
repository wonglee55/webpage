function navChange() {
	var x = document.getElementById("Navigation");		
	if (x.className == "large min" || x.className == "small min" || x.className == "min large" || x.className == "min small") {
		x.classList.remove("min");
	} else {
		x.classList.add("min");
	}
}
