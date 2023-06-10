"use strict";

import { events } from "./data.js";

function loadEvents() {
  // Sort the events in ascending order by date
  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const eventsList = document.getElementById("events-list");

  // Clear the current list
  eventsList.innerHTML = "";

  // Populate the events list
  for (let event of events) {
    let listItem = document.createElement("li");
    listItem.innerText = `${event.date} - ${event.title}: ${event.description}`;
    eventsList.appendChild(listItem);
  }
}

function createEvent(title, description, date) {
  // Create a new event object
  let newEvent = {
    title: title,
    description: description,
    date: date,
  };

  // Add the new event to the array
  events.push(newEvent);

  // Update the events list
  loadEvents();
}

// Load the events when the page loads
window.onload = loadEvents;
