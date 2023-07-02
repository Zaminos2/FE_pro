

const url = 'https://jsonplaceholder.typicode.com/users/'

const userDataRequest = fetch(url)
.then((data)=>data.json())
.then((data)=>console.log(data)).catch((error) => {
    console.log('Error fetching data:', error);
  });

  async function getUserData(id,callback){
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    await fetch(url)
    .then((data)=>data.json())
    .then(data => callback(data))
    .catch((error) => {
        console.log('Error fetching data:', error);
      });
      
  }
  function getUserImg(id){
    const imgUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    fetch(imgUrl)
    .then((data)=> data.json())
    .then((data)=>{ 

        const container = document.querySelector("body");
        return data.forEach((element)=> {
        const img = document.createElement("img");
        img.src = element.thumbnailUrl;
        container.append(img);
    });
})
.catch((error)=>{
    console.log('no such img',error)
});
  }
  
  getUserData(5,userData =>{
   const container = document.querySelector("body");
   container.insertAdjacentHTML("afterbegin",`    
   <div class="userContainer">
        <h2 class="name">${userData.name}</h2>
        <p class="email">${userData.email}</p>
        <p class="phone">${userData.phone}</p>
    </div>
`);
getUserImg(5);
  });

  const user1Promise = fetch('https://jsonplaceholder.typicode.com/users/1').then((response) =>
  response.json()
);
const user2Promise = fetch('https://jsonplaceholder.typicode.com/users/2').then((response) =>
  response.json()
);

Promise.all([user1Promise, user2Promise])
  .then((users) => console.log(users))
  .catch((error) => console.log('Error fetching user data:', error));

  const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.querySelector('.titleInput');
  const bodyInput = document.querySelector('.bodyInput');
  const userIdInput = document.querySelector('.userIdInput');

  const data = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: userIdInput.value,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log('Error posting data:', error));
});
function generatePostCard(postData) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('postContainer');
  
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = postData.title;
  
    const body = document.createElement('p');
    body.classList.add('body');
    body.textContent = postData.body;
  
    postContainer.appendChild(title);
    postContainer.appendChild(body);
  
    return postContainer;
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((postsData) => {
      const container = document.querySelector('.postsContainer');
      postsData.forEach((postData) => {
        const postCard = generatePostCard(postData);
        container.appendChild(postCard);
      });
    })
    .catch((error) => console.log('Error fetching posts data:', error));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const userIdInput = document.querySelector('.userIdInput');
      
        const userId = userIdInput.value;
      
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then((response) => response.json())
          .then((postsData) => {
            const container = document.querySelector('.postsContainer');
            container.innerHTML = ''; // Очистить контейнер перед добавлением новых постов
      
            postsData.forEach((postData) => {
              const postCard = generatePostCard(postData);
              container.appendChild(postCard);
            });
          })
          .catch((error) => console.log('Error fetching user posts:', error));
      });