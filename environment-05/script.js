"use strict";

"use strict";

// Fetch data from runners.json
fetch("runners.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Sort the runners based on their time
    jsonData.sort((a, b) => a.time - b.time);

    // Update the podium with the three fastest runners
    let podium = ["gold", "silver", "bronze"];
    for (let i = 0; i < podium.length; i++) {
      document.getElementById(`${podium[i]}-name`).innerText = jsonData[i].name;
      document.getElementById(`${podium[i]}-time`).innerText =
        jsonData[i].time.toFixed(2);
    }

    // Display the rest of the runners in the runnerups-list
    let runnerupsList = document.getElementById("runnerups-list");
    for (let i = 3; i < jsonData.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerText = `${jsonData[i].name} - time: ${jsonData[
        i
      ].time.toFixed(2)}`;
      runnerupsList.appendChild(listItem);
    }
  })
  .catch((error) => console.error("Error:", error));
