## Garbage collection

- The JS engine periodically checks for objects stored in the heap that has nothing referencing to them anymore so they can be deleted safely

- **Memory Leaks** is the situation that you don't use a value anymore but still have references to it, wasteing memory resource

- For `Event.addEventListener(type, callback)`, JS engine checks if the same callback function **reference** has been pased to that event type.
  - If the reference is the same, then no new listeners will be added
  - _BUT!!_ If an _anonymous function_ is passed in, JS creates a new instance of it inside the heap every time, so if you add the same anonymous callback as event listeners multiple times, you will indeed have multiple (redundant) listeners and may cause problem
  - Details: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
