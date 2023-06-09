"use strict";

// Global variable to hold our posts
let posts = [];

// This function loads the posts using Fetch API and JSON data
async function loadPosts() {
  // Fetch request to get the data from the JSON file
  const response = await fetch("posts.json");

  // Parse the JSON response into a JavaScript object and assign it to our global variable
  posts = await response.json();
}

// This function displays the posts on the webpage
function displayPosts() {
  // Select the section element where posts are to be displayed
  const postSection = document.querySelector("#posts-list");

  // Reset the section to blank before adding posts
  postSection.innerHTML = "";

  // Iterate over the posts and create HTML for each post
  posts.forEach((post) => {
    // Create an article element for each post
    const article = document.createElement("article");

    // Populate the article with the post's data
    article.innerHTML = `
            <img src="${post.image}" alt="${post.caption}" />
            <h2>${post.caption}</h2>
            <p>Likes: ${post.likes}</p>
        `;

    // Add the populated article to the posts section
    postSection.appendChild(article);
  });
}

// This function executes when the webpage is loaded
window.onload = function () {
  // First, load the posts
  loadPosts().then(() => {
    // Once the posts are loaded, display them on the webpage
    displayPosts();
  });
};
