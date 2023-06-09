"use strict";

// Global variable to store the posts
let posts = [];

// Function to load the posts from the JSON file
async function loadPosts() {
  const response = await fetch("posts.json"); // Please replace with the correct path to your JSON file
  posts = await response.json();
}

// Function to display the posts on the webpage
function displayPosts() {
  const postsList = document.querySelector("#posts-list");
  postsList.innerHTML = "";

  posts.forEach((post) => {
    postsList.innerHTML += `
            <article>
                <img src="${post.image}" alt="${post.caption}" />
                <h2>${post.caption}</h2>
                <p>Likes: ${post.likes}</p>
            </article>
        `;
  });
}

// Event listener for the dropdown menu
document.querySelector("#sortorder").addEventListener("change", function () {
  // Get the selected option from the dropdown
  let sortOrder = this.value;

  // Sort the posts array based on likes
  if (sortOrder === "ascending") {
    // If "low to high" is selected, sort in ascending order
    posts.sort((a, b) => a.likes - b.likes);
  } else if (sortOrder === "descending") {
    // If "high to low" is selected, sort in descending order
    posts.sort((a, b) => b.likes - a.likes);
  }

  // Display the sorted posts
  displayPosts();
});

// This function executes when the webpage is loaded
window.onload = function () {
  // First, load the posts
  loadPosts().then(() => {
    // Once the posts are loaded, display them on the webpage
    displayPosts();
  });
};
