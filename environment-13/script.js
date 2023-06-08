"use strict";

//loading global variable instead of fetching json
let tickets = [
  { eventName: "ABJI_HYPERSUN FEAT. MORAYA", used: true, id: 1240 },
  { eventName: "ARMAND HAMMER", used: false, id: 1605 },
  { eventName: "AUGUST ROSENBAUM", used: true, id: 1315 },
  { eventName: "BALA DESEJO", used: true, id: 1859 },
  { eventName: "BENNY JAMZ", used: false, id: 1819 },
  { eventName: "BIG JOANIE", used: true, id: 1994 },
  { eventName: "BIIG PIIG", used: false, id: 1708 },
  { eventName: "BILLY WOODS", used: false, id: 1155 },
  { eventName: "BLÆST", used: true, id: 1136 },
  { eventName: "BRIMHEIM", used: true, id: 1280 },
  { eventName: "CHAT PILE", used: true, id: 1684 },
  { eventName: "DEBBIE SINGS", used: false, id: 1146 },
  { eventName: "FEVER RAY", used: false, id: 1706 },
  { eventName: "IVORIAN DOLL", used: false, id: 1639 },
  { eventName: "KENDRICK LAMAR", used: true, id: 1657 },
  { eventName: "LORNA SHORE", used: false, id: 1265 },
  { eventName: "QUEENS OF THE STONE AGE", used: true, id: 1227 },
  { eventName: "REMA", used: true, id: 1522 },
  { eventName: "VILLANO ANTILLANO", used: true, id: 1130 },
];

console.log(tickets);

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

    //if else loop, to check if tickets are used or not after clicking the button.
    if (ticket.used) {
      button.textContent = "Brugt";
      button.disabled = true;
      article.style.backgroundColor = "gray";
    } else {
      button.textContent = "Brug";
      button.disabled = false;
    }

    button.addEventListener("click", () => {
      console.log("Button clicked for ticket: ", ticket.id);
      ticket.used = true;
      displayTickets();
    });
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(button);
    ticketsList.appendChild(article);
  });
}

displayTickets();
