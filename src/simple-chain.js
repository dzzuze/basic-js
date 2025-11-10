const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
     if (!this.chain) {
      this.chain = [];
    }
    this.chain.push(value === undefined ? '' : String(value));
    return this;
  },
  removeLink(position) {
      if (!this.chain || 
        !Number.isInteger(position) || 
        position < 1 || 
        position > this.chain.length) {
      this.chain = []; // Сбрасываем цепочку при ошибке
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
     if (!this.chain) {
      this.chain = [];
    }
    this.chain.reverse();
    return this;
  },
  finishChain() {
   if (!this.chain) {
      this.chain = [];
    }
    const result = this.chain.map(value => `( ${value} )`).join('~~');
    this.chain = []; 
    return result;
  },
};

module.exports = {
  chainMaker,
};
