const postsData = [
//   {
//     "user-name": "Shubham Wagh",
//     location: "Hood madi dude",
//     caption: "Thara bhai Shubham",
//     "image-url": "./posts/shubhambhau.png",
//     "user-img": "images/shubham.png",
//   },
  {
    "user-name": "Shubham Wagh",
    location: "Hood madi dude",
    caption: "Thara bhai Shubham",
    "image-url": "./posts/fu.png",
    "user-img": "images/shubham.png",
  },
  {
    "user-name": "Bhagvat Mutthe",
    location: "Firodya",
    caption:
      "Grateful for the guidance and motivation from @wagh.bhau 🙌 Your inspiration keeps us pushing our limits and striving for excellence. Thank you for appreciating my efforts and always believing in me! 💪🔥 #Trainer #Motivation #GratefulHeart #KeepGoing",
    "image-url": "./posts/with-master.jpg",
    "user-img": "images/logo.png",
  },
  {
    "user-name": "Ankush Pawar",
    location: "FC Collage",
    caption: "Last day of softskills session",
    "image-url": "./posts/softskilsession.jpg",
    "user-img": "images/ankush.jpg",
  },
  {
    "user-name": "Ajay Palhal",
    location: "Hood madi dude",
    caption: "@bhagvat_mutthe_ 's Birthday Celebration..! #constant",
    "image-url": "./posts/friends.jpg",
    "user-img": "images/ajay.png",
  },
];

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts-container");

  postsContainer.innerHTML = "";

  // Loop through each post data and create a post element
  posts.forEach((postData) => {
    // Create the post structure
    const postElement = document.createElement("div");
    postElement.classList.add("post-data");

    postElement.innerHTML = `
        <div class="post-header">
          <div class="user-data">
            <img id="user-dp" src="${postData["user-img"]}" alt="User DP" />
            <div class="user-info-header">
              <p class="user-name">${postData["user-name"]}</p>
              <p class="user-location">location: ${postData.location}</p>
            </div>
          </div>
          <div class="interaction-btns">
            <img id="dot-menu" src="./vectors/dot-menu.svg" alt="Menu" />
          </div>
        </div>
        <img class="post-image" src="${postData["image-url"]}" alt="Post Image" />
        <div class="data">
          <div class="interaction-btns">
            <div>
              <img
                src="./vectors/empty-heart.svg"
                alt="Like"
                class="vector-btn"
                onclick="this.src = this.src.includes('empty-heart.svg') ? './vectors/filled-heart.svg' : './vectors/empty-heart.svg';"
              />
              <img
                src="./vectors/comment.svg"
                alt="Comment"
                class="vector-btn"
              />
            </div>
            <div>
              <img class="vector-btn" src="./vectors/save.svg" alt="Save" />
            </div>
          </div>
          <p class="caption">${postData.caption}</p>
        </div>
      `;

    // Append the post element to the posts container
    postsContainer.appendChild(postElement);
  });
}

// Render all posts
renderPosts(postsData);
