var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "js/bookmarklet.js"});

  chrome.browserAction.getBadgeText({tabId: tab.id}, function (badgeText) {
    var newBadge = badgeText === BADGE.ON.TEXT ? BADGE.OFF : BADGE.ON;
    chrome.browserAction.setBadgeText({text: newBadge.TEXT, tabId: tab.id});
    chrome.browserAction.setBadgeBackgroundColor({color: newBadge.COLOR, tabId: tab.id});
  });
});

chrome.browserAction.setBadgeText({text: BADGE.ON.TEXT});
chrome.browserAction.setBadgeBackgroundColor({color: BADGE.ON.COLOR});
