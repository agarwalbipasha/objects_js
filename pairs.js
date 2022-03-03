function pairs(obj) {
    let result = [];
    for (let key in obj) {
        let eachPair = [];
        eachPair.push(key, obj[key]);
        result.push(eachPair);
    } return result;
}
module.exports = { pairs };