//  Refactor the previous example using async/await. Write an async function that calls both Promises and logs the results when they both resolve.

function getRandomDelay() {
    return Math.floor(Math.random() * 100) + 1; // Random delay between 1s and 3s
  }
  
  const promise1 = new Promise((resolve,reject) => {
    
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve) => {
    
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 3000);
  });
  
  async function handlePromises() {
    try {
      const results = await Promise.all([promise1, promise2]);
      console.log(results); // Logs both results when resolved
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  handlePromises();
  