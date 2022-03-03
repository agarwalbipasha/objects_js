function defaults(obj, defaultProps) {
    return Object.keys(obj).reduce((result, key) => {
        for (let key in defaultProps) {
        if (!obj.hasOwnProperty(key)) {
            result[key] = defaultProps[key];
            return result;
        }
    }}, {...obj});
}
module.exports = { defaults };