//   Write a function that merges two objects, combining their properties. If the same key exists in both objects, the value from the second object should override the first.



function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2};
const object2 = { b: 3, c: 4};

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 4, c: 3, d: 5 }
