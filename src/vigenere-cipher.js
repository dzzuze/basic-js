const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct; 
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const msgCode = char.charCodeAt(0) - 65;
        const keyCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const encryptedCode = (msgCode + keyCode) % 26;
        const encryptedChar = String.fromCharCode(encryptedCode + 65);
        result += encryptedChar;
        keyIndex++; 
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const msg = encryptedMessage.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const msgCode = char.charCodeAt(0) - 65;
        const keyCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const decryptedCode = (msgCode - keyCode + 26) % 26;
        const decryptedChar = String.fromCharCode(decryptedCode + 65);
        result += decryptedChar;
        keyIndex++; 
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
