module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('toString')){
    throw new Error();
  }
  var month = date.getMonth();
  if(month < 2 || month == 11)
    return 'winter';
  else if(month < 5)
    return 'spring';
  else if(month < 8)
    return 'summer';
  else if(month < 11)
    return 'autumn';
};
