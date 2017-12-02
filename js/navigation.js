window.addEventListener("scroll", function (e) {
	var top = this.pageYOffset;
	if (top > 100) {
		document.getElementById("Navigation").classList.remove("large");
		document.getElementById("Navigation").classList.add("small");
	} else {
		document.getElementById("Navigation").classList.remove("small");
		document.getElementById("Navigation").classList.add("large");
	}
});