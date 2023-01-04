module.exports = function reverse (n) {
    let absNumber = Math.abs(n);
    return Number(String(absNumber).split("").reverse().join(""));
}
