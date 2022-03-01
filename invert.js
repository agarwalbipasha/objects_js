function invert(obj) {
    return Object.entries(obj).map(array => array.reverse());
}
module.exports = { invert };