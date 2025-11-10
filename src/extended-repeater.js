const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const mainString = String(str);
  let additionBlock = '';
  if (addition !== '') {
    const additionArray = Array(additionRepeatTimes).fill(addition);
    additionBlock = additionArray.join(additionSeparator);
  }
  const fullBlock = mainString + additionBlock;
  const resultArray = Array(repeatTimes).fill(fullBlock);
  const result = resultArray.join(separator);
  return result;
}

module.exports = {
  repeater
};
