const pair = require("./pairs");

function invert(obj) {
    let resultObj = {};
    let reversedArray = pair.pairs(obj).map(array => array.reverse());
    for (let index = 0; index < reversedArray.length; index++) {
        resultObj[reversedArray[index][0]] = reversedArray[index][1];
    } return resultObj;
}
module.exports = { invert };