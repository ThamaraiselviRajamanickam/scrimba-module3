// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

var welcomeEl=document.getElementById("welcome-el");
var name="selvi";
var greeting="Hello welcome back!! ";
welcomeEl.innerHTML=greeting + name;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"
