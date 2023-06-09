"use strict";

// Definer en global variabel til at holde vores indlæg
let posts = [];

// Indlæs JSON-data ved hjælp af fetch API
fetch("./posts.json")
  .then((response) => response.json())
  .then((data) => {
    // Gem data i vores globale variabel
    posts = data;
    // Kalder vores funktion til at vise indlæg
    displayPosts();
  });

// Funktion til at vise indlæg
function displayPosts() {
  // Få reference til vores posts-liste sektion
  const postsList = document.getElementById("posts-list");
  // Tøm listen (hvis der tidligere er vist indlæg)
  postsList.innerHTML = "";
  // Løb gennem hvert indlæg og tilføj det til vores posts-liste sektion
  posts.forEach((post) => {
    // Lav et nyt article-element for hvert indlæg
    const article = document.createElement("article");
    // Indstil HTML for article-elementet
    article.innerHTML = `
            <img src="${post.image}" alt="${post.caption}" />
            <h2>${post.caption}</h2>
            <p>Likes: ${post.likes}</p>
        `;
    // Tilføj article-elementet til vores posts-liste sektion
    postsList.appendChild(article);
  });
}
