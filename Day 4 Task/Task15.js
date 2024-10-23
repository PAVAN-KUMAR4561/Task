//  Write a function that checks whether an object has any properties.

function hasProperties(obj) {
    return Object.keys(obj).length === 0;
}

// Example usage:
console.log(hasProperties({}));       // Expected output: true
console.log(hasProperties({ a: 1 })); // Expected output: false
