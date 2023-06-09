"use strict";

let addresses = [];

// Fetch the JSON data
fetch("./postnumre.json")
  .then((response) => response.json())
  .then((data) => {
    // Attach an input event listener to the postcode field
    document.getElementById("postnr").addEventListener("input", function (e) {
      let input = e.target.value;

      for (let item of data) {
        if (item.postnr === input) {
          document.getElementById("by").value = item.by;
          break;
        } else {
          document.getElementById("by").value = "";
        }
      }
    });
  });

// Submit event for the form
document
  .getElementById("address-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let navn = document.getElementById("navn").value;
    let adresse = document.getElementById("adresse").value;
    let postnr = document.getElementById("postnr").value;
    let by = document.getElementById("by").value;
    let email = document.getElementById("email").value;
    let nyhedsbrev = document.getElementById("nyhedsbrev").checked;

    let address = {
      navn: navn,
      adresse: adresse,
      postnr: postnr,
      by: by,
      email: email,
      nyhedsbrev: nyhedsbrev,
    };

    addresses.push(address);

    displayAddresses();
  });

// Function to display the addresses
function displayAddresses() {
  let container = document.createElement("div");
  container.id = "addresses-container";

  for (let address of addresses) {
    if (address.nyhedsbrev) {
      let addressElement = document.createElement("p");
      addressElement.textContent = `${address.navn}, ${address.adresse}, ${address.postnr} ${address.by}, ${address.email}`;

      let removeButton = document.createElement("button");
      removeButton.textContent = "Fjern";
      removeButton.addEventListener("click", function () {
        let index = addresses.indexOf(address);
        addresses.splice(index, 1);
        displayAddresses();
      });

      addressElement.appendChild(removeButton);
      container.appendChild(addressElement);
    }
  }

  if (document.getElementById("addresses-container")) {
    document.getElementById("addresses-container").replaceWith(container);
  } else {
    document.querySelector("main").appendChild(container);
  }
}
