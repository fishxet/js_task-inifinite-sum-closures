'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const functionAdd = (...args) => {
    if (args.length === 0) {
      const returnValue = result;

      result = 0;

      return returnValue;
    } else {
      result += args.reduce((cur, item) => cur + item, 0);

      return functionAdd;
    }
  };

  return functionAdd;
}

module.exports = makeInfinityAdder;
