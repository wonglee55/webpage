changeslides();
function changeslides() {
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	index ++;
	if (index > slides.length) {
		index = 1;
	}
	slides[index-1].style.display = "block";
	setTimeout(changeslides,10000);
}