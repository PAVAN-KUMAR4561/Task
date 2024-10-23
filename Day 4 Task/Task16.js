// Write a function that converts an object into a query string format used in URLs.

function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}


const input = { name: 'John', age: 30 };
const output = objectToQueryString(input);
console.log(output);      // name=John&age=30
