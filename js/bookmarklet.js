/*
 * Instant Smart Quotes by Florian Zemke, Regex by Muthu Kannan and Geoffrey Booth
 * https://github.com/Zemke/instant-smart-quotes
 *
 * Replace typewriter quotes, apostrophes, ellipses and dashes
 * with their typographically correct counterparts as you type.
 *
 * Wrap in backticks `"Thou shalt not use dumb quotes."` to ignore.
 * Also ignores triple-backtick ``` "code blocks" ```.
 */

var enabled;
var lang;

var isTextField = function (elem) {
  return !!(elem.tagName.toUpperCase() === 'TEXTAREA'
      || elem.isContentEditable
      || (elem.tagName.toUpperCase() === 'INPUT'
          && elem.type.toUpperCase() === 'TEXT'));
};

var charsTillEndOfStr = function (activeElement) {
  return getValue(activeElement).length - getSelectionStart(activeElement);
};

var correctCaretPosition = function (activeElement, charsTillEndOfStr) {
  var correctCaretPos = getValue(activeElement).length - charsTillEndOfStr;
  setSelection(activeElement, correctCaretPos);
  return correctCaretPos;
};

var processTextField = function (activeElement) {
  var charsTillEnfOfStrBeforeRegex = charsTillEndOfStr(activeElement);
  setValue(activeElement, replaceTypewriterPunctuation(getValue(activeElement)));
  correctCaretPosition(activeElement, charsTillEnfOfStrBeforeRegex);
  return getValue(activeElement);
};

var replaceTypewriterPunctuation = function (g) {
  var splitterRegex = /(?:```[\S\s]*?(?:```|$))|(?:`[\S\s]*?(?:`|$))|(?:\{code\}[\S\s]*?(?:\{code\}|$))|(?:\{noformat\}[\S\s]*?(?:\{noformat\}|$))/gi;
  var f = false,
      d = "",
      h = g.split(splitterRegex);
  if (h.length === 1) {
    d = regex(g);
  } else {
    var a = g.match(splitterRegex);
    if (!h[0]) {
      h.shift();
      f = true;
    }
    for (var b = 0; b < h.length; ++b) {
      var c = regex(h[b]);
      if (f) {
        d += a[b] != null ? a[b] + c : c;
      } else {
        d += a[b] != null ? c + a[b] : c;
      }
    }
  }
  return d;
};

var regex = function (g) {
  return g
      .replace(new RegExp('(\\s|^|\\(|\\>|\\])(' + lang.replacePrimary[0] + ')(?=[^>\\]]*(<|\\[|$))', 'g'), "$1" + lang.primary[0])
      .replace(new RegExp("(\\s|^|\\(|\\>|\\])(" + lang.replaceSecondary[0] + ")(?=[^>\\]]*(<|\\[|$))", 'g'), "$1" + lang.secondary[0])
      .replace(new RegExp('(.)(' + lang.replacePrimary[1] + ')(?=[^>\\]]*(<|\\[|$))', 'g'), "$1" + lang.primary[1])
      .replace(new RegExp("(.)(" + lang.replaceSecondary[1] + ")(?=[^>\\]]*(<|\\[|$))", 'g'), "$1" + lang.secondary[1])
      .replace(/(\w|\s)-{3}(\w|\s)/g, "$1—$2")
      .replace(/(\w|\s)-{2}(\w|\s)/g, "$1–$2")
      .replace(/(\w|\s)–-(\w|\s)/g, "$1—$2")
      .replace(/([^.…])\.{3}([^.…])/g, "$1…$2")

      // shortenings whitelist
      .replace(/‘([0-9]{2}s?)/gi, "’$1")
      .replace(/‘(em)/gi, "’$1")
      .replace(/‘(twas)/gi, "’$1")
      .replace(/‘(cause)/gi, "’$1")
      .replace(/‘(n)/gi, "’$1");
};

var getValue = function (activeElement) {
  if (activeElement.isContentEditable) {
    return document.getSelection().anchorNode.textContent;
  }
  return activeElement.value;
};

var setValue = function (activeElement, newValue) {
  if (activeElement.isContentEditable) {
    var sel = document.getSelection();

    if (!isTextNode(sel.anchorNode)) {
      return;
    }

    return sel.anchorNode.textContent = newValue;
  }
  return activeElement.value = newValue;
};

var getSelectionStart = function (activeElement) {
  if (activeElement.isContentEditable) {
    return document.getSelection().anchorOffset;
  }
  return activeElement.selectionStart;
};

var setSelection = function (activeElement, correctCaretPos) {
  if (activeElement.isContentEditable) {
    var range = document.createRange();
    var sel = window.getSelection();

    if (!isTextNode(sel.anchorNode)) {
      var textNode = document.createTextNode("");
      sel.anchorNode.insertBefore(textNode, sel.anchorNode.childNodes[0]);
      range.setStart(textNode, 0);
    } else {
      range.setStart(sel.anchorNode, correctCaretPos);
    }

    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    return;
  }

  activeElement.selectionStart = correctCaretPos;
  activeElement.selectionEnd = correctCaretPos;
};

var isTextNode = function (node) {
  return node.nodeType === 3;
};

document
    .querySelectorAll('[contenteditable], textarea, input')
    .forEach(function (elem) {
      elem.addEventListener('input', function (e) {
        enabled && isTextField(document.activeElement) && processTextField(document.activeElement);
      });
    });


chrome.runtime.onMessage.addListener(function (req, sender, cb) {
  enabled = req.enabled;
  lang = req.lang;
  cb({location: req.location});
});

chrome.runtime.sendMessage({question: 'enabled'}, function (res) {
  enabled = res.enabled;
  lang = res.lang;
});
