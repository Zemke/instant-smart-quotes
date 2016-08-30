var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};
var STORAGE_KEY = "InstantSmartQuotesDisabledPages";
var LANGUAGES = [
  {
    label: "Deutsch",
    code: "DE",
    replacePrimary: ["\"", "\""],
    replaceSecondary: ["'", "'"],
    primary: ["„", "“"],
    secondary: ["‚", "‘"]
  },
  {
    label: "English",
    code: "EN",
    replacePrimary: ["\"", "\""],
    replaceSecondary: ["'", "'"],
    primary: ["“", "”"],
    secondary: ["‘", "’"]
  },
  {
    label: "Français",
    code: "FR",
    replacePrimary: ["<<", ">>"],
    replaceSecondary: ["\"", "\""],
    primary: ["«", "»"],
    secondary: ["“", "”"]
  },
  {
    label:  "Polskie",
    code: "PL",
    replacePrimary: ["\"", "\""],
    replaceSecondary: ["<<", ">>"],
    primary: ["„", "”"],
    secondary: ["«", "»"]
  }
];
var currentBadge;
var disabledPages;

chrome.browserAction.onClicked.addListener(toggle);

chrome.runtime.onMessage.addListener(function (req, sender, cb) {
  chrome.storage.sync.get(STORAGE_KEY, function (storage) {
    var disabledPagesFromStorage = storage[STORAGE_KEY];

    if (!disabledPagesFromStorage) {
      cb({isEnabled: true});
      disabledPages = [];
      setBadge(BADGE.ON, sender.tab.id);
    } else {
      var isEnabled = disabledPagesFromStorage.indexOf(req.location) === -1;
      cb({isEnabled: isEnabled});
      disabledPages = disabledPagesFromStorage;
      setBadge(isEnabled ? BADGE.ON : BADGE.OFF, sender.tab.id);
    }
  });

  return true; // Important to indicate an asynchronous response.
});

function toggle(tab) {
  setBadge(currentBadge === BADGE.ON ? BADGE.OFF : BADGE.ON, tab.id);
  chrome.tabs.sendMessage(tab.id, {isEnabled: (currentBadge === BADGE.ON)}, function (res) {
    if (!res) {
      // When the extension had just been installed and the page has not yet been refreshed,
      // the content script will not yet have loaded and the page would therefor need a refresh.
      return;
    }

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
}

function setBadge(newBadge, tabId) {
  currentBadge = newBadge;

  chrome.browserAction.setBadgeText({text: currentBadge.TEXT, tabId: tabId});
  chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR, tabId: tabId});
}

function isUndefined(variable) {
  return typeof variable === 'undefined';
}