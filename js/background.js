var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};
var STORAGE_KEY = "InstantSmartQuotes";
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
var pageSettings;
var fallbackLang = setDefaultLang();

// TODO This is now toggled by a click event within the popup.
// chrome.browserAction.onClicked.addListener(toggle);

chrome.runtime.onMessage.addListener(function (req, sender, cb) {
  chrome.storage.sync.get(STORAGE_KEY, function (storage) {
    var pageSettingsFromStorage = storage[STORAGE_KEY];

    if (!pageSettingsFromStorage) {
      cb({location: location, lang: fallbackLang, enabled: true});
      pageSettings = [];
      setBadge(BADGE.ON, sender.tab.id);
    } else {
      pageSettings = pageSettingsFromStorage;
      var pageSetting = getPageFromSettings(req.location);
      cb(pageSetting);
      setBadge(pageSetting.enabled ? BADGE.ON : BADGE.OFF, sender.tab.id);
    }
  });

  return true; // Important to indicate an asynchronous response.
});

function toggle(tab) {
  setBadge(currentBadge === BADGE.ON ? BADGE.OFF : BADGE.ON, tab.id);

  chrome.tabs.sendMessage(tab.id, {enabled: (currentBadge === BADGE.ON)}, function (res) {
    if (!res) {
      // When the extension had just been installed and the page has not yet been refreshed,
      // the content script will not yet have loaded and the page would therefor need a refresh.
      return;
    }

    if (currentBadge === BADGE.ON) {
      updatePageFromSettings(res.location, {enabled: true});
    } else if (currentBadge === BADGE.OFF) {
      updatePageFromSettings(res.location, {enabled: false});
    }

    var newStorageDict = {};
    newStorageDict[STORAGE_KEY] = pageSettings;
    chrome.storage.sync.set(newStorageDict);
  });
}

function setBadge(newBadge, tabId) {
  currentBadge = newBadge;

  chrome.browserAction.setBadgeText({text: currentBadge.TEXT, tabId: tabId});
  chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR, tabId: tabId});
}

function getPageFromSettings(location) {
  var i = 0;
  for (; i < pageSettings.length; i++) {
    var pageSetting = pageSettings[i];

    if (pageSetting.location === location) {
      pageSetting.lang = populateLangByCode(pageSetting.lang);
      return pageSetting;
    }
  }

  return {location: location, enabled: true, lang: fallbackLang};
}

function updatePageFromSettings(location, newKeyValue) {
  var indexOfSetting = pageSettings.indexOf(getPageFromSettings(location));

  pageSettings[indexOfSetting].enabled = newKeyValue.enabled || pageSettings[indexOfSetting].enabled;
  pageSettings[indexOfSetting].lang = newKeyValue.lang || pageSettings[indexOfSetting].lang;

  return pageSettings;
}

function populateLangByCode(langCode) {
  var i = 0;
  for (; i < LANGUAGES.length; i++) {
    var obj = LANGUAGES[i];

    if (LANGUAGES[i].code.toLowerCase() === langCode.substr(0, 2).toLowerCase()) {
      return LANGUAGES[i];
    }
  }

  populateLangByCode('en'); // EN should always be available!
}

function setDefaultLang() {
  var browserUiLang = chrome.i18n.getUILanguage();

  var i = 0;
  for (; i < LANGUAGES.length; i++) {
    if (browserUiLang.substr(0, 2).toLowerCase() === LANGUAGES[i].code.toLowerCase()) {
      return LANGUAGES[i]; // TODO Or the whole object?
    }

  }
  return populateLangByCode('en'); // TODO Or the whole object?
}

function isUndefined(variable) {
  return typeof variable === 'undefined';
}