const button = document.querySelector("button");
const output = document.querySelector("p");

// Timer function that makes a promise version of setTimeout, to enable .then
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    console.log(`Timer of ${duration}ms started`);
    setTimeout(() => {
      console.log(`Timer of ${duration}ms finished`);
      resolve("timer done"); // resolve once the timer is up
    }, duration);
  });
  return promise;
};

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    console.log("Getting position...");
    const startTime = performance.now();
    navigator.geolocation.getCurrentPosition(
      // Success callback: pass the data into the callback
      (posData) => {
        resolve({ posData, startTime, endTime: performance.now() });
      },
      // Error callback: pass the error into the callback
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition(); // await will turn this function into a promise too
    // next line (wrapped by await in an invisible .then) will run only the await code is settled
    timerData = await setTimer(1000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);

  // getPosition()
  //   .then(
  //     // Resolved processing
  //     ({ posData, startTime, endTime }) => {
  //       fetch_posData = posData; // extract the result from the returned promise
  //       console.log(
  //         `Received your position in ${Math.ceil(endTime - startTime)}ms`
  //       );
  //       return setTimer(1000); // !!! Returns a NEW promise which is PENDING, next .then will not be run until settled
  //     }
  //   )
  //   .catch((error) => {
  //     console.log(`Error: ${error.message}`);
  //     return "Well whatever...";
  //   })
  //   .then((result) => {
  //     console.log(result, fetch_posData);
  //   });
}

// Add eventListener
button.addEventListener("click", trackUserHandler);
