const ftoc = function(fahr) {
  temp = ((fahr) - 32) * (5/9);
  return Math.round(temp * 10) / 10;
};

const ctof = function(cels) {
  temp = ((cels) * (9/5)) + 32;
  return Math.round(temp *10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
