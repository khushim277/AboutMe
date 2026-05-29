// Find the html element
const html = document.documentElement;

// Find the toggle button
const toggle = document.getElementById("toggle");

// Start in day mode
let mode = "day";

// When the button is clicked
toggle.addEventListener("click", function () {

  // Switch between day and night
  if (mode === "day") {
    mode = "night";
    html.setAttribute("data-mode", "night");
    toggle.textContent = "🌙 Night";
  } else {
    mode = "day";
    html.setAttribute("data-mode", "day");
    toggle.textContent = "☀️ Day";
  }

});