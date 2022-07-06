const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if ((typeof a) !== "number" || (typeof b) !== "number") {
        return 'ERROR';
    } else if (a < b) {
        while (a <= b) {
            sum += a;
            a++;
        }
        return sum;
    } else if (b < a) {
        while (b <= a) {
            sum += b;
            b++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
