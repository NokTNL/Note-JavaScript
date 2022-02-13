// Heavily nested setTimeout

let callBackHell = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`Liquid and Liquid Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on holder`);
            setTimeout(() => {
              console.log(`Nothing as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
};

(function wrapper() {
  callBackHell();
})();

// Async codes can stay on the stack when additional setTimeout callbacks are pushed in the stack
