"use strict";

// Global variable to store the posts
let posts = [];

// Function to load the posts from the JSON file
async function loadPosts() {
  const response = await fetch("posts.json"); // Update this to your json file location
  posts = await response.json();
}

// Function to display the posts on the webpage
function displayPosts() {
  const postsList = document.getElementById("posts-list");

  // Loop through each post
  for (let post of posts) {
    // Create a new article for each post
    const article = document.createElement("article");

    // Create img, h2, p, and like button elements and set their properties
    const img = document.createElement("img");
    img.src = post.image;
    img.alt = post.caption;

    const h2 = document.createElement("h2");
    h2.textContent = post.caption;

    const p = document.createElement("p");
    p.textContent = `Likes: ${post.likes}`;
    p.id = `likes-${post.id}`;

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.addEventListener("click", function () {
      // Increment the likes in the posts array
      post.likes++;

      // Update the likes paragraph text
      p.textContent = `Likes: ${post.likes}`;
    });

    // Append the img, h2, and p elements to the article
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(likeButton);
    article.appendChild(p);

    // Append the article to the posts list
    postsList.appendChild(article);
  }
}

// Call the functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  loadPosts().then(displayPosts);
});
