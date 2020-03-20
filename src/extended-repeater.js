module.exports = function repeater(str, options) {
    this.repeatTimes = options.repeatTimes !== undefined ? Number(options.repeatTimes) : 1;
    this.separator = options.separator !== undefined ? String(options.separator) :'+';
    this.addition = options.addition !== undefined ? String(options.addition) : '';
    this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? Number(options.additionRepeatTimes) : 1;
    this.additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
       
    let new_str = '';
    for(i = 0; i < this.repeatTimes; i++){
      new_str += str;
        
      for(j = 0; j < this.additionRepeatTimes; j++){
        new_str += this.addition;
        if(j != this.additionRepeatTimes-1) {
          new_str += this.additionSeparator;
        }
      }
      if(i != this.repeatTimes-1) {
        new_str += this.separator;
      }
    }
  return new_str;
};
  