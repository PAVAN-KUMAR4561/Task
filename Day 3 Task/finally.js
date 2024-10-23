// Create a Promise that resolves with a message after a delay of 2 seconds, but also randomly rejects with an error message. Use .finally() to log "Operation completed" regardless of whether the Promise was resolved or rejected.

const randomPromise = new Promise((resolve, reject) => {
    const delay = 2000; // 2 seconds delay
    setTimeout(() => {
      
      const success = Math.random() > 0.5; // 50% chance to resolve or reject
      if (success) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected with an error.");
      }
    }, delay);
  });
  
  randomPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Operation completed"); // runs regardless of resolve or reject
    });
  