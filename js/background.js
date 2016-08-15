var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};
var currentBadge = BADGE.ON;

chrome.browserAction.setBadgeText({text: currentBadge.TEXT});
chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR});

chrome.browserAction.onClicked.addListener(function (tab) {
  currentBadge = currentBadge === BADGE.ON ? BADGE.OFF : BADGE.ON;

  chrome.tabs.sendMessage(tab.id, {isEnabled: (currentBadge === BADGE.ON)}, function (response) {
    chrome.browserAction.setBadgeText({text: currentBadge.TEXT, tabId: tab.id});
    chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR, tabId: tab.id});
  });
});
