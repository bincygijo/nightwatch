/*
 *  This command will
 * wait explicitly until a specified element is visible  and performs assertions
 */

const global = require('../constants/constants');

exports.command = function checkElementTextEquals(
  element,
  text,
  timeout = global.waitForConditionTimeout,
  comment = `Checked element %s text equal to ${text} for %d ms`,
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.expect
    .element(element)
    .text.to.equal(text)
    .before(global.waitForConditionTimeout);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
