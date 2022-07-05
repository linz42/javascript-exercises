const repeatString = function(string, number) {
    reply = '';
    if (number < 0) {
        return "ERROR";
    }
    while (number > 0, number--) {
        reply = reply.concat(string);
    }
    return reply;
};

// Do not edit below this line
module.exports = repeatString;
