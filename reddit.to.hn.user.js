// ==UserScript==
// @name       Click through for reddit.com/r/hackernews/comments direct to hn comments
// @author     efng
// @namespace  http://efng.github.io/
// @version    0.1
// @description reloads any page that that jsut has preview set without accept.
// @match      http://www.reddit.com/r/hackernews/comments/*
// @downloadURL https://raw.githubusercontent.com/efng/gm-scripts/master/reddit.to.hn.user.js
// @updateURL   https://raw.githubusercontent.com/efng/gm-scripts/master/reddit.to.hn.user.js
// @copyright  2014+, efng
// @run-at document-start
// ==/UserScript==

document.location.href = $('[href^="http://news.ycombinator.com"]').attr('href');