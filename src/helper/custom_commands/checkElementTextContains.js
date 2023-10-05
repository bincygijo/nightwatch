/*
 *  This command will
 * wait explicitly until a specified element is visible  and perform assertion
 */

const global = require('../constants/constants');

exports.command = function checkElementTextContains(
  element,
  text,
  timeout = global.waitForConditionTimeout,
  comment = `Checked element %s text to contain ${text} for %d ms`,
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.expect
    .element(element)
    .text.to.contain(text)
    .before(global.waitForConditionTimeout);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
