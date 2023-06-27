const input = document.querySelector(".getUserInfo");
const nextUser = document.querySelector(".nextUser");
const previosUser = document.querySelector(".previosUser")
const container = document.querySelector(".container");
let userName; 
let userEmail; 
let lastKey;
const lastUser = localStorage.getItem("lastUser");

async function getInfo() {
  const id = input.value;
  if (localStorage.getItem(`userId${id}`) !== null) {
    localStorage.setItem("lastUser",id)
  } else {
    localStorage.setItem(`userId${id}`, id);
    localStorage.setItem("lastUser",id)
  }
  
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  try {
    const response1 = await fetch(url);
    const response2 = await fetch(url2);

    if (!response1.ok || !response2.ok) {
      throw new Error('Request failed with status: ' + response1.status + ', ' + response2.status);
    }

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
    if(localStorage.getItem("lastUser") !== null){
      const id = lastUser;
    
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

      try {
        const response1 = await fetch(url);
        const response2 = await fetch(url2);

        if (response1.ok && response2.ok) {
       
          const data1 = await response1.json();
          const data2 = await response2.json();

          return {
            userData: data1,
            postData: data2,
          };
        }else{
          const error = `<h2>Error ${response1.status}\n Error ${response2.status}`
          container.insertAdjacentHTML("afterbegin",error);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
        throw error;
      }
     }else{
      const warning = "<p>Please enter user id</p>"
      container.insertAdjacentHTML("afterbegin",warning);
      return null;
     }
}

async function userChange(value) {
  const id = value;

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  try {
    const response1 = await fetch(url);
    const response2 = await fetch(url2);

    if (response1.ok && response2.ok) {
      const data1 = await response1.json();
      const data2 = await response2.json();
      localStorage.setItem("lastUser", id);

      return {
        userData: data1,
        postData: data2,
      };
    } else {
      const error = `<h2>Error ${response1.status}\n Error ${response2.status}</h2>`;
      container.insertAdjacentHTML("afterbegin", error);
    }
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

async function pageRender(value) {
  try {
    const result = await value;

    if (result !== null) {

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
  await pageRender(getLocalId());
});

document.querySelector(".start").addEventListener("click", async () => {
 pageRender(getInfo());
});

previosUser.addEventListener("click", async () => {
  let previosUserRend = parseInt(localStorage.getItem("lastUser")) - 1;
  pageRender(userChange(previosUserRend));
})

nextUser.addEventListener("click", async () => {
  let nextUserRend = parseInt(localStorage.getItem("lastUser")) + 1;
  pageRender(userChange(nextUserRend));
})
