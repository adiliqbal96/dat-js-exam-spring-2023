"use strict";

let tickets = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    let response = await fetch("./tickets.json");
    tickets = await response.json();
    displayTickets();
  } catch (e) {
    console.log("Error in loading data: " + e.message);
  }
});

function displayTickets() {
  const ticketsList = document.querySelector("#tickets-list");
  ticketsList.innerHTML = "";

  tickets.forEach((ticket, index) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    h3.textContent = ticket.eventName;
    p.textContent = `id: ${ticket.id}`;
    p.classList.add("ticketid");

    if (ticket.used) {
      article.classList.add("used");
      button.textContent = "Brugt";
      button.disabled = true;
    } else {
      button.textContent = "Brug";
      button.disabled = false;
    }

    button.addEventListener("click", () => {
      ticket.used = true;
      displayTickets();
    });

    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(button);
    ticketsList.appendChild(article);
  });
}
