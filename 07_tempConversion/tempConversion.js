const ftoc = function(fInput) {
  cRaw=(fInput-32)*5/9;
  cOutput = Math.round(cRaw*10)/10;
  return cOutput;
};

const ctof = function(cInput) {
  fRaw = (cInput*9/5)+32;
  fOutput = Math.round(fRaw*10)/10;
  return fOutput;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
