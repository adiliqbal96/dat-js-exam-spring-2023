let posts = [];

async function loadPosts() {
  let response = await fetch("posts.json");
  let data = await response.json();
  posts = data;
}

function displayPosts() {
  let postContainer = document.getElementById("posts-list");
  postContainer.innerHTML = "";

  let filteredPosts = posts.filter((post) => post.published && post.likes > 5);

  filteredPosts.forEach((post) => {
    let postElement = document.createElement("article");

    let imageElement = document.createElement("img");
    imageElement.src = post.image;
    imageElement.alt = post.caption;

    let captionElement = document.createElement("h2");
    captionElement.textContent = post.caption;

    let likesElement = document.createElement("p");
    likesElement.textContent = `Likes: ${post.likes}`;

    postElement.append(imageElement, captionElement, likesElement);
    postContainer.appendChild(postElement);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await loadPosts();
  displayPosts();
});

// Add event listener to filter form checkbox
document.getElementById("all").addEventListener("change", function () {
  if (this.checked) {
    displayPosts();
  } else {
    displayFilteredPosts();
  }
});

function displayFilteredPosts() {
  let postContainer = document.getElementById("posts-list");
  postContainer.innerHTML = "";

  let filteredPosts = posts.filter((post) => post.published);

  filteredPosts.forEach((post) => {
    let postElement = document.createElement("article");

    let imageElement = document.createElement("img");
    imageElement.src = post.image;
    imageElement.alt = post.caption;

    let captionElement = document.createElement("h2");
    captionElement.textContent = post.caption;

    let likesElement = document.createElement("p");
    likesElement.textContent = `Likes: ${post.likes}`;

    postElement.append(imageElement, captionElement, likesElement);
    postContainer.appendChild(postElement);
  });
}
