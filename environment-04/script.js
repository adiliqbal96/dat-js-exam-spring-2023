"use strict";
import { events } from "./data.js";

("use strict");

// Function to display events
function displayEvents() {
  // Get the events-list element from the HTML
  const eventsList = document.getElementById("events-list");

  // Clear the existing events from the list
  eventsList.innerHTML = "";

  // Sort the events by date
  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Add each event to the events list
  for (const event of events) {
    const listItem = document.createElement("li");
    listItem.textContent = `${event.date} - ${event.title}: ${event.description}`;
    eventsList.appendChild(listItem);
  }
}

// Function to create a new event
function createEvent(eventTitle, eventDescription, eventDate) {
  // Create a new event object
  const newEvent = {
    title: eventTitle,
    description: eventDescription,
    date: eventDate,
  };

  // Add the new event to the events array
  events.push(newEvent);

  // Display the updated events list
  displayEvents();
}

// Call displayEvents to display the initial list of events
displayEvents();

// Add an event listener to the form
document
  .getElementById("create-event-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the event details from the form
    const eventTitle = document.getElementById("title").value;
    const eventDescription = document.getElementById("description").value;
    const eventDate = document.getElementById("date").value;

    // Create a new event with the entered details
    createEvent(eventTitle, eventDescription, eventDate);

    // Clear the form
    event.target.reset();
  });
