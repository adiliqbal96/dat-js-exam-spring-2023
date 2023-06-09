"use strict";

let posts = [];

async function loadPosts() {
  const response = await fetch("posts.json"); // Provide the correct path to your JSON file here
  posts = await response.json();
}

function displayPosts() {
  let postsList = document.getElementById("posts-list");
  postsList.innerHTML = ""; // Clear the current posts before adding new ones.

  let showAll = document.getElementById("all").checked;
  for (let post of posts) {
    // Only display the post if it's published or if the "Show all posts" checkbox is checked
    if (post.published || showAll) {
      let postArticle = document.createElement("article");
      postArticle.innerHTML = `
        <img src="${post.image}" alt="${post.caption}" />
        <h2>${post.caption}</h2>
        <p>Likes: ${post.likes}</p>
      `;
      postsList.appendChild(postArticle);
    }
  }
}

window.onload = function () {
  loadPosts().then(() => {
    displayPosts();
    // Update posts display when "Show all posts" checkbox changes
    document.getElementById("all").addEventListener("change", displayPosts);
  });
};
