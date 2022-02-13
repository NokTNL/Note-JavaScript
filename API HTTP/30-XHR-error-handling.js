const listEl = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";

    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
      // a typical response has an HTTP status 200-299, so we can check if the HTTP code fall in this range
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("HTTP status doesn't look right"));
      }
    };

    // .onerror: assign a callback to handle an unsuccessful request
    // !! if you did get a response from the server but not a normal HTTP status code (e.g. 404),
    // ... it is still considered as a SUCCESSFUL request and will not throw error
    xhr.onerror = () => {
      reject(new Error("Failed to send the request"));
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
    postEl.querySelector("li").id = post.id;
    listEl.append(postEl);
  }
}

fetchPost();
