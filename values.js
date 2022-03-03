function values(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    } return result;
}
module.exports = { values };