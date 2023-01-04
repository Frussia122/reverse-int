module.exports = function reverse (n) {
    let absNumber = Math.abs(n);
    return Number(absNumber.split("").reverse().join(""));
}
