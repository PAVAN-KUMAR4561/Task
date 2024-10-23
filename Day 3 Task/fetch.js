// Write an async function called fetchData that simulates fetching data from an API using a Promise that resolves with an object after a delay. Use try/catch to handle any errors that might occur during the fetching process.(Do research for fetch data and use API link (https://jsonplaceholder.typicode.com/posts))

async function fetchData() {
    try {
      const res = await fetch('https://api.restful-api.dev/objects');
      if (res.ok) {
        const data = await res.json(); 
        console.log('Data fetched successfully:', data);
      }
      else{
        throw new Error("Error:"+res.status);
      }
     
     
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }
  fetchData();
  