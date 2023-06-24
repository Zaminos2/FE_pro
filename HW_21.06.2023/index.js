const input = document.querySelector(".getUserInfo");
let userName; 
let userEmail; 
let lastKey;

async function getInfo() {
  const id = input.value;
  if (localStorage.getItem(`userId${id}`) !== null) {

  } else {
    localStorage.setItem(id, id);
    lastKey = id;
  }
  
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  try {
    const response1 = await fetch(url);
    const response2 = await fetch(url2);

    const data1 = await response1.json();
    const data2 = await response2.json();

    return {
      userData: data1,
      postData: data2,
    };
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

async function getLocalId() {
  const localCount = localStorage.length;
  if (localCount > 0) {
    lastKey = localStorage.key(localCount - 1);
    const id = localStorage.getItem(lastKey);

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    try {
      const response1 = await fetch(url);
      const response2 = await fetch(url2);

      const data1 = await response1.json();
      const data2 = await response2.json();

      return {
        userData: data1,
        postData: data2,
      };
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  } else {
    console.log("There are no such users!");
  }
}

async function pageRender() {
  try {
    const result = await getLocalId();

    if (result && result.userData && result.postData) {
      console.log(result.userData);
      console.log(result.postData);

      const infoContainer = document.querySelector(".infoContainer");
      infoContainer.innerHTML = "";

      userName = document.querySelector(".userName");
      userEmail = document.querySelector(".userEmail");

      if (userName && userEmail) {
        userName.textContent = result.userData.name;
        userEmail.textContent = result.userData.email;
      }

      const userContainer = `
        <div class="user-container">
          <div class="user">
            <h2 class="userName">${result.userData.name}</h2>
            <h2 class="userEmail">${result.userData.email}</h2>
          </div>
          <div class="posts"></div>
        </div>
      `;

      infoContainer.insertAdjacentHTML("afterbegin", userContainer);

      result.postData.forEach((post) => {
        const UserPostHtml = `
          <div class="infoItem">
            <h5 class="postTitle">${post.title}</h5>
            <p class="postText">${post.body}</p>
          </div>
        `;
        const postsContainer = document.querySelector(".posts");
        postsContainer.insertAdjacentHTML("beforeend", UserPostHtml);
      });
    } else {
      console.log("No data found.");
    }
  } catch (error) {
    console.log(error);
  }
}


window.addEventListener("DOMContentLoaded", async () => {
  await pageRender();
});

document.querySelector(".start").addEventListener("click", async () => {
  try {
    const result = await getInfo();

    if (result && result.userData && result.postData) {
      console.log(result.userData);
      console.log(result.postData);

      const infoContainer = document.querySelector(".infoContainer");
      infoContainer.innerHTML = "";

      userName = document.querySelector(".userName");
      userEmail = document.querySelector(".userEmail");

      if (userName && userEmail) {
        userName.textContent = result.userData.name;
        userEmail.textContent = result.userData.email;
      }

      const userContainer = `
        <div class="user-container">
          <div class="user">
            <h2 class="userName">${result.userData.name}</h2>
            <h2 class="userEmail">${result.userData.email}</h2>
          </div>
          <div class="posts"></div>
        </div>
      `;

      infoContainer.insertAdjacentHTML("afterbegin", userContainer);

      result.postData.forEach((post) => {
        const UserPostHtml = `
          <div class="infoItem">
            <h5 class="postTitle">${post.title}</h5>
            <p class="postText">${post.body}</p>
          </div>
        `;
        const postsContainer = document.querySelector(".posts");
        postsContainer.insertAdjacentHTML("beforeend", UserPostHtml);
      });
    } else {
      console.log("No data found.");
    }
  } catch (error) {
    console.log(error);
  }
});


