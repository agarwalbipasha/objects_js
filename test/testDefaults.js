const testDefault = require("../defaults");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
console.log(testDefault.defaults(testObject, {name: "Aditya", status: "Single"}));