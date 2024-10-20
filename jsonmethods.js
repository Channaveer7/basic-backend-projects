// 1. JSON.parse()
//Purpose: Converts a JSON string into a JavaScript object.
//Usage: Use this when you receive a JSON string (e.g., from an API) and want to work with it as a JavaScript object.

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // Output: John

// 2. JSON.stringify()
// Purpose: Converts a JavaScript object into a JSON string.
// Usage: Use this when you want to send a JavaScript object as JSON (e.g., in an API request).
const obj1 = { name: "John", age: 30, city: "New York" };
const jsonString1 = JSON.stringify(obj);

console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}