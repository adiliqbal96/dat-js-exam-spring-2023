"use strict";
let posts = [];

async function loadPosts() {
  const response = await fetch("posts.json"); // Provide the correct path to your JSON file here
  posts = await response.json();
}

function displayPosts() {
  let postsList = document.getElementById("posts-list");
  postsList.innerHTML = ""; // Clear the current posts before adding new ones.

  for (let post of posts) {
    if (post.published) {
      // Check if the post is published
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

function countPosts() {
  let publishedCount = 0;
  let notPublishedCount = 0;

  for (let post of posts) {
    if (post.published) {
      publishedCount++;
    } else {
      notPublishedCount++;
    }
  }

  let postsCountDiv = document.getElementById("posts-count");

  if (!postsCountDiv) {
    // Create the div if it doesn't exist
    postsCountDiv = document.createElement("div");
    postsCountDiv.id = "posts-count";
    document.body.appendChild(postsCountDiv);
  }

  postsCountDiv.innerHTML = `
        <p>Published Posts: ${publishedCount}</p>
        <p>Not Published Posts: ${notPublishedCount}</p>
    `;
}

window.onload = function () {
  loadPosts().then(() => {
    displayPosts();
    countPosts();
  });
};
