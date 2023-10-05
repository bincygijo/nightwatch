/*
 *  This command will
 * wait until a specified field is visible  and set it
 */

const global = require('../constants/constants');

exports.command = function setField(
  element,
  value,
  timeout = global.waitForConditionTimeout,
  comment = 'Set field %s on the page with the specified value in  %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.setValue(element, value);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
