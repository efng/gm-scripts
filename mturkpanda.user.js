// ==UserScript==
// @name       Preview & accept for mturk by efng
// @author     efng
// @namespace  http://efng.github.io/
// @version    0.4
// @description reloads any page that that jsut has preview set without accept.
// @match      https://www.mturk.com/mturk/preview*
// @downloadURL https://raw.githubusercontent.com/efng/gm-scripts/master/mturkpanda.user.js
// @updateURL   https://raw.githubusercontent.com/efng/gm-scripts/master/mturkpanda.user.js
// @copyright  2014+, efng
// @run-at document-start
// ==/UserScript==
if ( /preview\?/.test (window.location.href))
{
    window.location = window.location.href.replace(/preview\?/,'previewandaccept?')
}