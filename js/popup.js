var bg = chrome.extension.getBackgroundPage();
chrome.tabs.query({active: true, currentWindow: true}, init);

function init(tabs) {
  var currentTab = tabs[0];
  var currentSwitchBtn;

  chrome.browserAction.getBadgeText({tabId: currentTab.id}, setSwitchBtn);

  function setSwitchBtn(badgeText) {
    currentSwitchBtn = badgeText !== bg.BADGE.OFF.TEXT ? bg.BADGE.OFF : bg.BADGE.ON;
    var otherStatusEl = document.getElementById('otherStatus');
    otherStatusEl.innerHTML = currentSwitchBtn.TEXT;
    otherStatusEl.style.backgroundColor = currentSwitchBtn.COLOR;
  }

  document.getElementById('switch').addEventListener('click', function (e) {
    var currentBadge = bg.toggle(currentTab); // TODO Async?
    dd(currentBadge.TEXT);
    setSwitchBtn(currentBadge.TEXT);
    window.close();
  });

  var langList = document.getElementById('langList');

  var i = 0;
  for (;i < bg.LANGUAGES.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(bg.LANGUAGES[i].label));
    (function (index) {
      li.addEventListener('click', function (e) {
        switchLangTo(bg.LANGUAGES[index]);
      });
    })(i);
    langList.appendChild(li);
  }
}

function switchLangTo(lang) {

  // TODO Default lang should be the browser's lang
  // TODO Initialize lang the first time the user accesses a page

  bg.switchLangTo(lang);
  window.close();
}

function dd(variable) {
  document.getElementById('dd').innerHTML = JSON.stringify(variable, null, 2);
}