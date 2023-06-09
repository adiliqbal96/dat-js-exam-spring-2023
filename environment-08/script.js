"use strict";

let posts = [];

async function loadPosts() {
  // Fetching the JSON data
  const response = await fetch("posts.json");
  // Parsing the JSON data and storing it in 'posts'
  posts = await response.json();
}

function displayPosts(filterFunc) {
  const postsList = document.getElementById("posts-list");

  // Clearing the posts list
  postsList.innerHTML = "";

  // Looping through each post
  for (let post of posts.filter(filterFunc)) {
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
  displayPosts(() => true);

  // Adding a button to show top liked posts
  const button = document.createElement("button");
  button.textContent = "Show Top Liked";
  button.onclick = () => displayPosts((post) => post.likes > 6);

  // Append the button to the main section
  document.querySelector("main").appendChild(button);
};
