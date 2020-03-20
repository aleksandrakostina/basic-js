module.exports = function countCats(arr) {
  let count = 0,
      a = arr.reduce((acc, val) => acc.concat(val), []);
  for(i = 0; i < a.length; i++) { 
    if(a[i] === '^^') 
      count++;
    }     
  return count; 
};