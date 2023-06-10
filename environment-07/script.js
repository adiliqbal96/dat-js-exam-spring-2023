"use strict";

let rooms = [];

function createRoom(name, width, length) {
  rooms.push({
    name: name,
    width: width,
    length: length,
    area: width * length,
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  // Get the form inputs
  let name = document.getElementById("name").value;
  let width = document.getElementById("width").value;
  let length = document.getElementById("length").value;

  // Create a new room
  createRoom(name, width, length);

  // Display the updated rooms list
  displayRooms();
}

function displayRooms() {
  let roomsTable = document.getElementById("rooms-table");

  // Clear the table
  roomsTable.innerHTML = "";

  // Add each room to the table
  for (let room of rooms) {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${room.name}</td>
      <td>${room.width}</td>
      <td>${room.length}</td>
      <td>${room.area}</td>
    `;

    roomsTable.appendChild(row);
  }
}

// Attach the form submit event
document
  .getElementById("create-room-form")
  .addEventListener("submit", handleFormSubmit);
