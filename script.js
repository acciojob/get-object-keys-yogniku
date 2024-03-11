//your JS code here. If required.

// Create an object called student with a property called name
let student = {
  name: "jony"
};

// Add a property to the Object prototype called getKeys() that returns an array of all the keys in the object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the getKeys() method on the student object
console.log(student.getKeys()); // Output: ["name"]