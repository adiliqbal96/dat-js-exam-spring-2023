"use strict";
"use strict";
// Create an empty array to store athlete objects
let athletes = [];

// Access the form and athletes list elements in the DOM
const form = document.getElementById("create-athlete-form");
const athletesList = document.getElementById("athletes-list");

// Add an event listener to the form to handle submissions
form.addEventListener("submit", createAthlete);

function createAthlete(event) {
  // Prevent the form from being submitted the default way
  event.preventDefault();

  // Get the values of the name and top speed fields from the form
  const name = event.target.elements.name.value;
  const topSpeed = parseInt(event.target.elements.topSpeed.value, 10);

  // Validate the inputs
  if (
    name.trim() === "" ||
    topSpeed < 50 ||
    topSpeed > 100 ||
    isNaN(topSpeed)
  ) {
    // Show an alert and stop the function if the inputs are invalid
    alert("Please enter a valid name and a top speed between 50 and 100.");
    return;
  }

  // Create a new athlete object
  const newAthlete = { name: name, topSpeed: topSpeed };

  // Add the new athlete to the array
  athletes.push(newAthlete);

  // Display the updated list of athletes
  displayAthletes();
}

function displayAthletes() {
  // Clear the current list of athletes
  athletesList.innerHTML = "";

  // Create a new list item for each athlete
  for (let athlete of athletes) {
    const listItem = document.createElement("li");
    listItem.textContent = `${athlete.name} - ${athlete.topSpeed}`;

    // Add the new list item to the athletes list
    athletesList.appendChild(listItem);
  }
}
