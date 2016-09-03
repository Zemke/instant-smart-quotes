//<editor-fold desc="Description">
var LANGUAGES = [
  {
    "label": "Afrikaans",
    "code": "Afr",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Albanian",
    "code": "AL",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Arabic",
    "code": "Ara",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "«",
      "»"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "<<",
      ">>"
    ]
  },
  {
    "label": "Armenian",
    "code": "AM",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Belarusian",
    "code": "BY",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Bosnian",
    "code": "BA",
    "primary": [
      "”",
      "”"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Bulgarian",
    "code": "BG",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Catalan",
    "code": "Cata",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Chinese",
    "code": "CL",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Croatian",
    "code": "HR",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Czech",
    "code": "CZ",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Danish",
    "code": "DK",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "'",
      "'"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "’",
      "’"
    ]
  },
  {
    "label": "Dutch",
    "code": "NL",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "‚",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "English",
    "code": "EN",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Esperanto",
    "code": "Esp",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Estonian",
    "code": "EE",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      ""
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      null,
      null
    ]
  },
  {
    "label": "Filipino",
    "code": "Fil",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Finnish",
    "code": "FI",
    "primary": [
      "”",
      "”"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "French",
    "code": "GF",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "«",
      "»"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "<<",
      ">>"
    ]
  },
  {
    "label": "Georgian",
    "code": "GE",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      ""
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      null,
      null
    ]
  },
  {
    "label": "German",
    "code": "DE",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Greek",
    "code": "GR",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Hebrew",
    "code": "Heb",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "‚",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Hungarian",
    "code": "HU",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "»",
      "«"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      ">>",
      "<<"
    ]
  },
  {
    "label": "Icelandic",
    "code": "IS",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Indonesian",
    "code": "IN",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Interlingua",
    "code": "Int",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Irish",
    "code": "Ire",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Italian",
    "code": "IT",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Korean",
    "code": "KR",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Latvian",
    "code": "LV",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "„",
      "“"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Lithuanian",
    "code": "LT",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      ""
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      null,
      null
    ]
  },
  {
    "label": "Macedonian",
    "code": "MO",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "’",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Norwegian",
    "code": "NF",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Persian",
    "code": "PE",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      ""
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      null,
      null
    ]
  },
  {
    "label": "Polish",
    "code": "PL",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "«",
      "»"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "<<",
      ">>"
    ]
  },
  {
    "label": "Brazilian",
    "code": "BR",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Portuguese",
    "code": "PT",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Romanian",
    "code": "RO",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "«",
      "»"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "<<",
      ">>"
    ]
  },
  {
    "label": "Russian",
    "code": "RU",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "„",
      "“"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Serbian",
    "code": "RS",
    "primary": [
      "„",
      "”"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Slovak",
    "code": "SK",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Slovene",
    "code": "SK",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Sorbian",
    "code": "Sor",
    "primary": [
      "„",
      "“"
    ],
    "secondary": [
      "‚",
      "‘"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Spanish",
    "code": "ES",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Swedish",
    "code": "SE",
    "primary": [
      "”",
      "”"
    ],
    "secondary": [
      "’",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Thai",
    "code": "TH",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Turkish",
    "code": "TR",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      "‘",
      "’"
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      "'",
      "'"
    ]
  },
  {
    "label": "Ukrainian",
    "code": "UA",
    "primary": [
      "«",
      "»"
    ],
    "secondary": [
      "„",
      "“"
    ],
    "replacePrimary": [
      "<<",
      ">>"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  },
  {
    "label": "Vietnamese",
    "code": "VN",
    "primary": [
      "“",
      "”"
    ],
    "secondary": [
      ""
    ],
    "replacePrimary": [
      "\"",
      "\""
    ],
    "replaceSecondary": [
      null,
      null
    ]
  },
  {
    "label": "Welsh",
    "code": "Wal",
    "primary": [
      "‘",
      "’"
    ],
    "secondary": [
      "“",
      "”"
    ],
    "replacePrimary": [
      "'",
      "'"
    ],
    "replaceSecondary": [
      "\"",
      "\""
    ]
  }
];
//</editor-fold>
var BADGE = {
  ON:  {TEXT: 'ON',  COLOR: '#00A850'},
  OFF: {TEXT: 'OFF', COLOR: '#6B0031'}
};
var STORAGE_KEY = "InstantSmartQuotes";
var currentBadge;
var pageSettings;
var currentPageSetting;
var fallbackLang = setDefaultLang();

chrome.runtime.onMessage.addListener(function (req, sender, cb) {
  chrome.storage.sync.get(STORAGE_KEY, function (storage) {
    var pageSettingsFromStorage = storage[STORAGE_KEY];

    if (!pageSettingsFromStorage) {
      cb({location: location, lang: fallbackLang, enabled: true});
      pageSettings = [];
      currentPageSetting = {enabled: true, location: req.location, lang: fallbackLang};
      setBadge(BADGE.ON, sender.tab.id);
    } else {
      pageSettingsFromStorage.filter(function (pageSetting) {
        return pageSetting.lang = populateLangByCode(pageSetting.lang);
      });

      pageSettings = pageSettingsFromStorage;
      currentPageSetting = getPageFromSettings(req.location);
      cb(currentPageSetting);
      setBadge(currentPageSetting.enabled ? BADGE.ON : BADGE.OFF, sender.tab.id);
    }
  });

  return true; // Important to indicate an asynchronous response.
});

function toggle(tab, toggleLang) {
  if (toggleLang === true) {
    setBadge(BADGE.ON, tab.id);
  } else {
    setBadge(currentBadge === BADGE.ON ? BADGE.OFF : BADGE.ON, tab.id);
  }

  chrome.tabs.sendMessage(tab.id, {enabled: (currentBadge === BADGE.ON), lang: currentPageSetting.lang}, function (res) {
    if (!res) {
      // When the extension had just been installed and the page has not yet been refreshed,
      // the content script will not yet have loaded and the page would therefor need a refresh.
      return;
    }

    currentPageSetting = updatePageFromSettings(res.location,
        {enabled: currentBadge === BADGE.ON, lang: currentPageSetting.lang});
    storePageSettings();
  });

  return currentBadge;
}

function switchLangTo(lang, tab) {
  currentPageSetting.lang = lang;
  currentPageSetting.enabled = true;
  toggle(tab, true);
}

function setBadge(newBadge, tabId) {
  currentBadge = newBadge;
  var badgeText = currentBadge === BADGE.ON ? formatLangCode(currentPageSetting.lang.code) : BADGE.OFF.TEXT;

  chrome.browserAction.setBadgeText({text: badgeText, tabId: tabId});
  chrome.browserAction.setBadgeBackgroundColor({color: currentBadge.COLOR, tabId: tabId});
}

function getPageFromSettings(location) {
  var i = 0;
  for (; i < pageSettings.length; i++) {
    var pageSetting = pageSettings[i];

    if (pageSetting.location === location) {
      pageSetting.lang = populateLangByCode(pageSetting.lang.code);
      return pageSetting;
    }
  }

  return {location: location, enabled: true, lang: fallbackLang};
}

function updatePageFromSettings(location, newKeyValue) {
  var pageFromSettings = getPageFromSettings(location);
  var indexOfSetting = pageSettings.indexOf(pageFromSettings);

  var newSetting = {
    location: location,
    enabled: isUndefined(newKeyValue.enabled) ? pageFromSettings.enabled : newKeyValue.enabled,
    lang: isUndefined(newKeyValue.lang) ? pageFromSettings.lang : newKeyValue.lang
  };

  if (isDefaultSetting(newSetting)) {
    if (indexOfSetting !== -1) {
      // Default settings should not be stored.
      pageFromSettings.splice(indexOfSetting, 1);
    }
  } else {
    if (indexOfSetting === -1) {
      pageSettings.push(newSetting);
    } else {
      pageSettings[indexOfSetting] = newSetting;
    }
  }

  return newSetting;
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
      return LANGUAGES[i];
    }

  }
  return populateLangByCode('en');
}

function isDefaultSetting(setting) {
  try {
    return (
      setting.enabled === true
      && setting.code.toLowerCase() === fallbackLang.code.toLowerCase());
  } catch (e) {
    return false;
  }
}

function storePageSettings() {
  var pageSettingsToStore = JSON.parse(JSON.stringify(pageSettings)); // Deep copy.

  pageSettingsToStore.map(function (pageSettingToStore) {
    pageSettingToStore.lang = pageSettingToStore.lang.code;
  });

  var newStorageDict = {};
  newStorageDict[STORAGE_KEY] = pageSettingsToStore;
  chrome.storage.sync.set(newStorageDict);
}

function formatLangCode(langCode) {
  if (langCode.length === 3) { // Custom languages without an associated country.
    return langCode[0].toUpperCase() + langCode.substr(1, 3).toLowerCase();
  }
  return langCode.substr(0, 2).toUpperCase();
}

function isUndefined(variable) {
  return typeof variable === 'undefined';
}