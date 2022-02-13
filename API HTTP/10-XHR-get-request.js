// XHR: an API provided by the browser to send HTTP requests, in the form of a built-in class
// XHR has much wider support than fetch

// create a new request
const xhr = new XMLHttpRequest();

// set up the request using .open
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// first argument: set HTTP verb
// second: set the URL you want to send HTTP request to

// once the request is set up, send it:
xhr.send();

// .onload: assign a handler function to the built-in event listener of XMLHttpRequest
// called when an event is triggered by a successful request
// the event passed in has the target = the XMLHttpRequest
// !! this is ASYNCHRONUSLY called
// !! .addEventListener is not supported in older browsers
xhr.onload = function () {
  // the "response" prop of XHR returns the response, according to the specified .responseType (default "text")
  const listOfPosts = xhr.response; // this will be text by default so will need JSON.parse to turn it into an object
};

// alternatively, setting response.type = "json" will make .response returns an object parsed from JSON internally:
xhr.responseType = "json";
