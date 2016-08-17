var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};
var STORAGE_KEY = "InstantSmartQuotesDisabledPages";
var currentBadge;
var disabledPages;

chrome.browserAction.onClicked.addListener(function (tab) {
  setBadge(currentBadge === BADGE.ON ? BADGE.OFF : BADGE.ON, tab.id);
  chrome.tabs.sendMessage(tab.id, {isEnabled: (currentBadge === BADGE.ON)}, function (res) {
    var indexOfDisabledPage = disabledPages.indexOf(res.location);

    if (currentBadge === BADGE.ON && indexOfDisabledPage !== -1) {
      disabledPages.splice(indexOfDisabledPage, 1);
    } else if (currentBadge === BADGE.OFF && indexOfDisabledPage === -1) {
      disabledPages.push(res.location);
    }

    var newStorageDict = {};
    newStorageDict[STORAGE_KEY] = disabledPages;
    chrome.storage.sync.set(newStorageDict);
  });
});

chrome.runtime.onMessage.addListener(function (req, sender, cb) {
  chrome.storage.sync.get(STORAGE_KEY, function (storage) {
    var disabledPagesFromStorage = storage[STORAGE_KEY];

    if (!disabledPagesFromStorage) {
      cb({isEnabled: true});
      disabledPages = [];
      setBadge(BADGE.ON);
    } else {
      var isEnabled = disabledPagesFromStorage.indexOf(req.location) === -1;
      cb({isEnabled: isEnabled});
      disabledPages = disabledPagesFromStorage;
      setBadge(isEnabled ? BADGE.ON : BADGE.OFF);
    }
  });

  return true; // Important to indicate an asynchronous response.
});

function setBadge(newBadge, tabId) {
  currentBadge = newBadge;

  if (isUndefined(tabId)) {
    chrome.tabs.getCurrent(function (tab) {
      setBadge(currentBadge, isUndefined(tab) ? null : tab.id);
    });
    return;
  }

  chrome.browserAction.setBadgeText({text: currentBadge.TEXT, tabId: tabId});
  chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR, tabId: tabId});
}

function isUndefined(variable) {
  return typeof variable === 'undefined';
}