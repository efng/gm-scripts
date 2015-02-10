// ==UserScript==
// @name       MTurk Notifications by efng
// @author     efng
// @namespace  http://efng.github.io/
// @version    0.6.1
// @description Notifications for mturk pages. Changes title of unviewed mturk hits & beeps periodically. Closes any tabs that were open by a script but found no hits.
// @match      https://www.mturk.com/mturk/accept*
// @match      https://www.mturk.com/mturk/preview*
// @match      https://www.mturk.com/mturk/continue*
// @match      https://www.mturk.com/mturk/searchbar*
// @downloadURL https://raw.githubusercontent.com/efng/gm-scripts/master/mturknotify.user.js
// @updateURL   https://raw.githubusercontent.com/efng/gm-scripts/master/mturknotify.user.js
// @copyright  2014+, efng
// ==/UserScript==
var uselessHits = /Your search did not match any HITs|Your Qualifications do not meet the requirements to preview HITs in this group|There are no more available HITs in this group. See more HITs available to you below.|You are not qualified to accept this HIT./i
if (uselessHits.test(document.body.innerHTML) ) {
    window.close();
}

var initalTitle = document.title;


//change these to change what flashes in title of the tabs
var firstAlert = "New", secondAlert = "---  HIT";

//amount of time for bell to play in ms.
var bellDelay = 30000 + Math.floor(Math.random()*20000);

//sound to play on alert
var bellAlert = new Audio("http://www.freesound.org/data/previews/188/188032_3403708-lq.mp3");

var blink = function () {
  document.title = document.title == firstAlert ? secondAlert : firstAlert ;
}


var bellAlertId = setInterval(function(){bellAlert.play();}, bellDelay), blinkId = setInterval(blink, 1000);

// this function removes any notifcations happening, then removes liseners.
var titlechange = function() {
    clearInterval(blinkId);
    clearInterval(bellAlertId);
    document.title = initalTitle;
    window.removeEventListener('focus', titlechange , false);
    window.removeEventListener('mousemove', titlechange , false);
}


//adds 2 listeners for tabs that have no been viewed
window.addEventListener('focus', titlechange );
window.addEventListener('mousemove', titlechange );
