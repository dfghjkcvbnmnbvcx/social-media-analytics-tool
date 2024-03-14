/**
 * (c) Ricardo Moreno <morenoricardo237@gmail.com>
 *
 * For more details about of the license of this source code,
 * please see the license file LICENSE.
 */

'use strict';

module.exports = areArrays;

/**
 * areArrays
 * This takes any parameters
 * @returns {boolean}
 */
function areArrays () {
  for (let i = 0; i < arguments.length; i++) {
    if (!Array.isArray(arguments[i])) {
      return false;
    }
  }
  
  return true;
}
