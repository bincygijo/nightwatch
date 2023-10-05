/*
 *  This command will
 * check if a specified element is not present
 */

const global = require('../constants/constants');

exports.command = function checkElementNotPresent(element, callback) {
  this.expect
    .element(element)
    .to.not.be.present.before(global.waitForConditionTimeout);
  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
