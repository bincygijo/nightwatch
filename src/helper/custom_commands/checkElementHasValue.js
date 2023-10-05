/*
 *  This command will
 * wait explicitly until a specified element is visible  and checks if it has specified value
 */

const global = require('../constants/constants');

exports.command = function checkElementHasValue(
  element,
  value,
  timeout = global.waitForConditionTimeout,
  comment = `Checked element %s to have the value mathces to  ${value} in the page for %d ms`,
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.expect
    .element(element)
    .to.have.value.which.contains(value)
    .before(global.waitForConditionTimeout);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
