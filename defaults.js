function defaults(obj, defaultProps) {
    return Object.keys(obj).reduce((result, key) => {
        // console.log(result);
        if (!obj.hasOwnProperty(key)) {
            result[key] = defaultProps[key];
            return result;
        }
    }, {});
}
module.exports = { defaults };