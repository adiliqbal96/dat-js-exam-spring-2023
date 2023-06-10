"use strict";

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

  tickets.forEach((ticket) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("article");
    const button = document.createElement("button");

    h3.textContent = ticket.eventName;
    p.textContent = `id: ${ticket.id}`;
    p.classList.add("ticketid");

    button.textContent = ticket.used ? "Brugt" : "Brug";
    button.disabled = ticket.used;
    article.style.backgroundColor = ticket.used ? "gray" : "";

    button.addEventListener("click", () => {
      console.log("Button clicked for ticket: ", ticket.id);
      ticket.used = true;
      displayTickets();
    });

    article.append(h3, p, button);
    ticketsList.appendChild(article);
  });
}

displayTickets();
