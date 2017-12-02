var index = 0;
var slides = document.getElementsByClassName("banner");
for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	index ++;
	if (index > slides.length) {
		index = 1;
	}
	slides[index-1].style.display = "block"


function slide(change) {
	for (var i= 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	index += change;
	if (index > slides.length) {
		index = 1;
	}
	if (index < 1) {
		index = slides.length;
	}
	slides[index-1].style.display = "block";

}