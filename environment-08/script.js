"use strict";

let posts = [];

async function loadPosts() {
  // Fetching the JSON data
  const response = await fetch("posts.json");
  // Parsing the JSON data and storing it in 'posts'
  posts = await response.json();
}

function displayPosts() {
  const postsList = document.getElementById("posts-list");

  // Clearing the posts list
  postsList.innerHTML = "";

  // Looping through each post
  for (let post of posts) {
    // Creating the HTML for each post
    const postElement = document.createElement("article");

    // Here we are using template literals to create the HTML for each post
    postElement.innerHTML = `
      <img src="${post.image}" alt="${post.caption}" />
      <h2>${post.caption}</h2>
      <p>Likes: ${post.likes}</p>
    `;

    // Appending each post to the posts list
    postsList.appendChild(postElement);
  }
}

window.onload = async function () {
  // Load and display the posts once the window loads
  await loadPosts();
  displayPosts();
};
