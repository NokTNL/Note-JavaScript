const listEl = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");

function sendHttpRequest(method, url, data) {
  return fetch(
    url,
    // You can change the behaviour of fetch by passing an object into the second argument
    {
      // method: fetch uses "GET" method by default
      method: method,
      // body: set the CONTENT you want to send (remember to stringfy first)
      body: JSON.stringify(data),
      // headers: other extra info you need to send, depends on the API
      // This will hshow up in "Request headers" in chrome dev tool
      // headers' name is case-insensitive
      headers: {
        "content-type": "applicatin/whatever",
        "my-type": "anything",
      },
    }
  ).then((response) => response.json());
}

async function fetchPost() {
  const response = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = response;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listEl.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    userId: userId,
    title: title,
    body: content,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchPost();
createPost("DUMMY POST", "DUMMY CONTENT");
