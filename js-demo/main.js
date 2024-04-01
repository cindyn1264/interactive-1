let apples = 4;
let oranges = 4;
let message = "";

if (apples == oranges) {
	message = "Same number of apples and oranges";
}

//output to html elem
document.getElementById('text').innerText = message;
