
	window.addEventListener("scroll", function (e) {
		var top= this.pageYOffset;
		offset = .8;
		var yPos = top * offset;
		document.getElementById("background1").setAttribute
		('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
		yPos = yPos * offset;
		document.getElementById("background2").setAttribute
		('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
		yPos = yPos * offset;
		document.getElementById("background3").setAttribute
		('style','transform:translate3d(0px, ' + yPos + 'px, 0px)');
	});
	