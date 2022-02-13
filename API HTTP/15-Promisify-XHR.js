const listEl = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");

// Promisify XHRs
function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function () {
      resolve(xhr.response);
    };
  });
  return promise;
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
    listEl.append(postEl);
  }
}

fetchPost();
