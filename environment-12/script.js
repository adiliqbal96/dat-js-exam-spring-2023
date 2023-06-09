"use strict";
let addresses = [];

document
  .getElementById("address-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let navn = document.getElementById("navn").value;
    let adresse = document.getElementById("adresse").value;
    let postnr = document.getElementById("postnr").value;
    let by = document.getElementById("by").value;
    let email = document.getElementById("email").value;

    let address = {
      navn: navn,
      adresse: adresse,
      postnr: postnr,
      by: by,
      email: email,
    };

    addresses.push(address);

    console.log(addresses);
  });
