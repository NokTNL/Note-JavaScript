function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";

    // XHR.setRequestHeader: set headers in requests
    // You can call it multiple times
    xhr.setRequestHeader("Content-type", "application/whatever"); // The header will be "content-type: application/whatever"
    xhr.setRequestHeader("my-type", "anything");

    // Data should be sent as JSON
    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
      resolve(xhr.response);
    };
  });
  return promise;
}

// POST request
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    userId: userId,
    title: title,
    body: content,
  };

  // We need to append data to a POST request
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

createPost("DUMMY POST", "DUMMY CONTENT");
