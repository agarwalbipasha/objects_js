
function keys(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            result.push(key);
        }
    } return result;
}
module.exports = { keys };