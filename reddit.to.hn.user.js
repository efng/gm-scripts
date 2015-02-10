// ==UserScript==
// @name       reddit comments -> hn.com comments
// @author     efng
// @namespace  http://efng.github.io/
// @version    0.1.5
// @description Click through for reddit.com/r/hackernews/comments direct to hn comments
// @match      http://www.reddit.com/r/hackernews/comments/*
// @downloadURL https://raw.githubusercontent.com/efng/gm-scripts/master/reddit.to.hn.user.js
// @updateURL   https://raw.githubusercontent.com/efng/gm-scripts/master/reddit.to.hn.user.js
// @copyright  2014+, efng
// @run-at document-start
// ==/UserScript==

document.location.href = $('[href^="http://news.ycombinator.com"]').attr('href');