const arrayOfObjects = [
    { key: 'a', value: 1 },
    { key: 'b', value: 2 },
    { key: 'c', value: 3 }
  ];
  
  const mergedObject = arrayOfObjects.reduce((acc, obj) => {
    acc[obj.key] = obj.value;
    return acc;
  }, {});
  
  console.log(mergedObject);          // Output: { a: 1, b: 2, c: 3 }

  