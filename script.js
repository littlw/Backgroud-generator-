var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndbtn = document.getElementById("random");

// sets gradients on background
function setGradient() {
	let gradients =
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	body.style.background = gradients;
	// rndbtn.style.background = gradients;

	css.textContent = body.style.background + ";";
}

// loading page
window.onload = setGradient();


// random btn
function generateRandom() {
	let r1 = Math.floor((Math.random() * 254) + 1);
	let g1 = Math.floor((Math.random() * 254) + 1);
	let b1 = Math.floor((Math.random() * 254) + 1);
	let r2 = Math.floor((Math.random() * 254) + 1);
	let g2 = Math.floor((Math.random() * 254) + 1);
	let b2 = Math.floor((Math.random() * 254) + 1);
	body.style.background =
	"linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 

	// body.style.background = generateRandom;
	// rndbtn.style.background = generateRandom;

	css.textContent = body.style.background + ";";
}

// function generateRandom() {
// 	const r = 0x12;
// 	const g = 0x34;
// 	const b = 0x56;

// 	let color = r << 16 | g << 8 | b;
// 	const rndColor1 = Math.floor((Math.random() * color));
// 	const rndColor2 = Math.floor((Math.random() * color));
// 	color = rndColor1;
// 	color = rndColor2;
// }

// function generateRandom(color) {
// 	const r = color >>> 16 & 0xff;
// 	const g = color >>> 8 & 0xff;
// 	const b = color & 0xff;
// 	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
// 	body.style.background =
// 	"linear-gradient(to right, "
// 	+ yiq 
// 	+ ", " 
// 	+ yiq 
// 	+ ")";
// 	return yiq >= 128 ? 0x0 : 0xffffff;
// }



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rndbtn.addEventListener("input", generateRandom);