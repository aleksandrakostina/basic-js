module.exports = function createDreamTeam(arr) {
  let a = [];
  if (Array.isArray(arr)) {
    arr.forEach(el => {
      if(typeof(el) == 'string'){
        a.push(el.trim().charAt(0).toUpperCase());
      }  
    });
    return a.sort().join('');
  }
  else
    return false;
};