module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let a = [];
  for(i = 0; i < arr.length; i++) {
    
    if(arr[i]  != '--discard-next' && arr[i]  != '--discard-prev' && arr[i]  != '--double-next' && arr[i]  != '--double-prev'){
      a.push(arr[i])
    }
    else {
      if(arr[i] == '--discard-next') {
        if(arr.length - 1 != i) {
          i++;
        }
      }
      else 
        if(arr[i] == '--discard-prev'){
          if(i != 0){
            a.pop(arr[i-1]);
          }
        }
        else 
          if(arr[i] == '--double-next'){
            if(arr.length - 1 != i) {
              a.push(arr[i+1]);
            }
          }
          else 
            if(arr[i] == '--double-prev'){
              if(i != 0) {
                a.push(arr[i-1]);
              }
            }
      }   
  }
  return a;
};
