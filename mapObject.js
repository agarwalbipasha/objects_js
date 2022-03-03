const keys = require("./keys.js");
function mapObject(obj, cb) {
    return keys.keys(obj).reduce(function (result, key) {
        result[key] = cb(obj[key]);
        return result;
    }, {});
}
module.exports = { mapObject };