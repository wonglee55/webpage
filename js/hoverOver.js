function pika() {
	hideAll();
	document.getElementById("l1").classList = "block";
	
}
function charmander() {
	hideAll();
	document.getElementById("l2").classList = "block";
}
function squirtle() {
	hideAll();
	document.getElementById("l3").classList = "block";
}
function bulbasaur() {
	hideAll();
	document.getElementById("l4").classList = "block";
}
function hideAll() {
	document.getElementById("l1").classList = "large2";
	document.getElementById("l2").classList = "large2";
	document.getElementById("l3").classList = "large2";
	document.getElementById("l4").classList = "large2";
}
function fullScreen1() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("p1").classList = "";
}
function fullScreen2() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("p2").classList = "";
}
function fullScreen3() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("p3").classList = "";
}
function fullScreen4() {
	document.getElementById("blackScreen").classList = "";
	document.getElementById("p4").classList = "";
}
function minimize() {
	document.getElementById("p1").classList = "large2";
	document.getElementById("p2").classList = "large2";
	document.getElementById("p3").classList = "large2";
	document.getElementById("p4").classList = "large2";
	document.getElementById("blackScreen").classList = "large2";
}