function mapObject(obj, cb) {
    return Object.keys(obj).reduce(function (result, key) {
        result[key] = cb(obj[key]);
        return result;
    }, {});
}
module.exports = { mapObject };