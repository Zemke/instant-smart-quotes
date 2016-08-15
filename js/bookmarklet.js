/*
 * Instant Smart Quotes by Florian Zemke, Regex by Muthu Kannan
 * https://github.com/Zemke/instant-smart-quotes
 *
 * Replace typewriter quotes, apostrophes, ellipses and dashes
 * with their typographically correct counterparts as you type.
 *
 * Wrap in backticks `"Thou shalt not use dumb quotes."` to ignore.
 */

var isEnabled = true;

document.addEventListener('input', function () {

  var isTextField = function (activeElement) {
    return !!(activeElement.tagName.toUpperCase() == 'TEXTAREA'
           || activeElement.isContentEditable
           || (activeElement.tagName.toUpperCase() == 'INPUT'
           && activeElement.type.toUpperCase() == 'TEXT'));
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
    var splitterRegex = /`[\S\s]*?`/g;
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
      .replace(/(\s|^|\(|\>|\])(")(?=[^>\]]*(<|\[|$))/g, "$1“")
      .replace(/(\s|^|\(|\>|\])(')(?=[^>\]]*(<|\[|$))/g, "$1‘")
      .replace(/([^0-9])(")(?=[^>\]]*(<|\[|$))/g, "$1”")
      .replace(/([^0-9])(')(?=[^>\]]*(<|\[|$))/g, "$1’")
      .replace(/(\w|\s)-{3}(\w|\s)/g, "$1—$2")
      .replace(/(\w|\s)-{2}(\w|\s)/g, "$1–$2")
      .replace(/([^\\\.…])\.{3}([^\.…])/g, "$1…$2");
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

  var main = function () {
    var activeElement = document.activeElement;
    if (isEnabled && isTextField(activeElement)) {
      return processTextField(activeElement);
    }
    return false;
  }; main();
});

chrome.runtime.onMessage.addListener(function (request, sender, cb) {
  isEnabled = request.isEnabled;
  cb();
});