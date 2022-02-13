// fetch is an API for doing XHR, exposed by (newer) browsers
// It is a global function and belongs to the window object
// fetch returns a Promise by default (no need promisifying!!)
// MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function sendHttpRequest(url, data) {
  // fetch wrap ALL VALUES in Promises so you always need to access them with .them/.catch/await
  // The content you need has to be extracted by two .then's:
  // 1. fetch returns a Promisfied Response Object (which does not contain the data you need)
  const contentPromise = fetch(url)
    // 2. .json takes a snapshot of the Response, parse the JSON into an object then return it as another Promise
    .then((response) => response.json)
    // 3. use another .then to extract the content
    .then((content) => {
      /* some code to manipulate the content*/
      return content; // to transfer it down if needed
    });

  return contentPromise;
}

async function fetchPost() {
  // extract the result from the returned contentPromise
  const content = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(content);
}

fetchPost();
