"use strict";

let postnrData;

fetch("./postnumre.json")
  .then((response) => response.json())
  .then((data) => (postnrData = data))
  .catch((error) => {
    console.error("Error:", error);
  });

document.getElementById("postnr").addEventListener("input", function (e) {
  let input = e.target.value;

  for (let data of postnrData) {
    if (data.postnr === input) {
      document.getElementById("by").value = data.by;
      break;
    } else {
      document.getElementById("by").value = "";
    }
  }
});

document.getElementById("email").addEventListener("input", function (e) {
  let input = e.target.value;

  if (!input.includes("@")) {
    alert("Please enter a valid email");
  }
});
