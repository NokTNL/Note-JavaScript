const listEl = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => {
    // response.ok = true when 200 <= response.status < 300
    // !!! fetch does not reject on HTTP error codes!!! It only rejects when no request can be made (e.g. network failure)
    if (response.ok) return response.json();
    else {
      // Sometimes even if the HTTP status is bad, it still returns some useful info
      // but to extract that info we need to nest another .then here as .json always return Promises
      return response.json().then((errorData) => {
        throw new Error(`Bad HTTP status ${response.status}`, {
          cause: errorData,
        });
      });
    }
  });
}

async function fetchPost() {
  // need try ... catch blocks to collect errors in all the promises
  try {
    const content = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    const listOfPosts = content;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listEl.append(postEl);
    }
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
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
