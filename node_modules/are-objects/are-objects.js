/**
 * (c) Ricardo Moreno <morenoricardo237@gmail.com>
 *
 * For more details about of the license of this source code,
 * please see the license file LICENSE.
 */

'use strict';

module.exports = areObjects;

/**
 * areObjects
 * This takes any parameters
 * @returns {boolean}
 */
function areObjects () {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i.toString()] !== 'object') {
      return false;
    }
  }
  
  return true;
}  
