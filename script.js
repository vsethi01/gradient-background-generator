var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
//var letters = "0123456789ABCDEF"; - This line defines a string containing all the possible characters that can be used to generate a hexadecimal color code.

//var color = "#"; - This line initializes the color variable with the "#" symbol, which is used to indicate that the following characters represent a hexadecimal color code.

//for (var i = 0; i < 6; i++) { ... } - This loop runs six times to generate the six characters that make up the hexadecimal color code.

//color += letters[Math.floor(Math.random() * 16)]; - This line selects a random character from the letters string by generating a random number between 0 and 15 using Math.random(), multiplying it by 16 to get a number between 0 and 15 (inclusive), and then using the Math.floor() function to round down to the nearest integer. This integer is then used as an index to select a character from the letters string, which is appended to the color variable.

//return color; - This line returns the final hexadecimal color code, which consists of the "#" symbol followed by six randomly selected characters from the letters string.

function setRandomColors() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
}

// Call setGradient() once after the DOM has loaded
window.addEventListener("DOMContentLoaded", function() {
	setGradient();
});
//window.addEventListener("DOMContentLoaded", function() { ... }) is an event listener that listens for the DOMContentLoaded event, which is fired when the HTML document has been completely loaded and parsed by the browser. The function that is passed as the second argument to addEventListener() is then executed when the event is triggered.

//In this case, the function that is executed when the DOMContentLoaded event is fired is setGradient(). This function sets the background of the body element to a linear gradient using the values of the color1 and color2 input elements, and updates the text content of the h3 element to display the current CSS background value.

//So, when the DOMContentLoaded event is fired (i.e., when the HTML document has finished loading), the setGradient() function is called, which sets the initial background gradient based on the values of the color1 and color2 input elements. This ensures that the background gradient is displayed correctly when the page is first loaded.

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Add event listener to randomButton
randomButton.addEventListener("click", setRandomColors);
