/*
 *  This command will
 * wait until a specified field is visible  and clears it
 */
const global = require('../constants/constants');

exports.command = function clearField(
  element,
  timeout = global.waitForConditionTimeout,
  comment = 'Cleared the field %s on the page in %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  this.clearValue(element);

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
