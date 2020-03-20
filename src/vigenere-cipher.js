class VigenereCipheringMachine {
    constructor(type = true){
        this.type = type;
    }

    encrypt(str, key, type) {
      return this.encryption(str, key, 'encrypt');
    }

    decrypt(str, key, type) {
      return this.encryption(str, key, 'decrypt');
    }

    encryption(str, key, type) {
      if(!str || !key){
        throw new Error();
      }
      let arr = [];
      let j = 0;

      str = str.toUpperCase();
      key = key.toUpperCase();
      
      if(type == 'encrypt') {
        for (i = 0; i < str.length; i++) {
          if (str[i] >= 'A' && str[i] <= 'Z') {
            arr.push(String.fromCharCode((str[i].charCodeAt(0) - 65 + key[j%key.length].charCodeAt(0) - 65 )% 26 + 65));
            j++;
          }
          else {
           arr.push(str[i]);
          }
        }  
      }
      if(type == 'decrypt'){
        for (i = 0; i < str.length; i++) {
          if (str[i] >= 'A' && str[i] <= 'Z') {
            if (str[i].charCodeAt(0) - key[j%key.length].charCodeAt(0)  >= 0){
              arr.push(String.fromCharCode(str[i].charCodeAt(0) - key[j%key.length].charCodeAt(0) + 65));
            }
            else {
              arr.push(String.fromCharCode(26 + str[i].charCodeAt(0) - key[j%key.length].charCodeAt(0) + 65));
            }
            j++;
          }
          else {
            arr.push(str[i]);
          }
        }  
      }   
      if (!this.type) {
        return arr.reverse().join('');  
      }
      return arr.join('');  
  }
}

module.exports = VigenereCipheringMachine;
