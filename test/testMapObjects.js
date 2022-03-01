const mapOfObject = require("../mapObject");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
console.log(mapOfObject.mapObject(testObject, function(value) {
    return typeof value == 'number' ? value + 5 : value;
}));