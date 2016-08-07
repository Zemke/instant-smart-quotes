/**
 * Smart Quotes by Florian Zemke, regex by manki.in
 * https://github.com/Zemke/instant-smart-quotes
 *
 * Replace typewriter quotes, apostrophes, ellipses and dashes
 * with their typographically correct counterparts as you type.
 *
 * Wrap in braces {{"The brace's chars will be ignored."}} to ignore.
 */
document.addEventListener('input', function () {

  /**
   * Will return a boolean value based on
   * whether or not the HTML element is a text field or not.
   *
   * @param {object} activeElement An HTML Element
   * @returns {bool} True, if the element is of type
   *  `TEXTAREA` or `INPUT` with type `text`, false otherwise.
   */
  var isTextField = function (activeElement) {
    if (activeElement.tagName.toUpperCase() == 'TEXTAREA'
      || activeElement.isContentEditable
      || (activeElement.tagName.toUpperCase() == 'INPUT'
      && activeElement.type.toUpperCase() == 'TEXT'))   {
      return true;
    }
    return false;
  };

  /**
   * Takes a text field and counts the characters from
   * the position of the caret until the end of the string.
   *
   * @param {object} activeElement Either a textarea or an input element
   *  of type text.
   * @returns {Number} The number of characters until the end of the string.
   */
  var charsTillEndOfStr = function (activeElement) {
    return getValue(activeElement).length - getSelectionStart(activeElement);
  };

  /**
   * Determines the correct position of the caret and sets it.
   * Used to keep the caret at the position of where
   * it was before regex changed the string.
   *
   * @param {object} activeElement Either a textarea or an input element
   *  of type text.
   * @param {Number} charsTillEndOfStr See {@link charsTillEndOfStr}.
   * @returns {Number} The correct position of the caret.
   */
  var correctCaretPosition = function (activeElement, charsTillEndOfStr) {
    var correctCaretPos = getValue(activeElement).length - charsTillEndOfStr;
    setSelection(activeElement, correctCaretPos);
    return correctCaretPos;
  };

  /**
   * Do the job of taking the appropriate steps to replace the string.
   *
   * @param {Object} activeElement Either a textarea or an input element
   *  of type text.
   * @return {String} The new value of the text area.
   */
  var processTextField = function (activeElement) {
    var charsTillEnfOfStrBeforeRegex = charsTillEndOfStr(activeElement);
    setValue(activeElement, replaceTypewriterPunctuation(getValue(activeElement)));
    correctCaretPosition(activeElement, charsTillEnfOfStrBeforeRegex);
    return getValue(activeElement);
  };

  /**
   * This method will replace quotes, apostrophes, ellipses and dashes
   * with their typograhpically correct counterparts.
   *
   * @param {String} g The text to be replaced.
   * @returns {String} The text after quotes, apostrophes, ellipses and dashes
   *  have been replaced.
   */
  var replaceTypewriterPunctuation = function (g) {
    var splitterRegex = /\{{2}[\S\s]*?\}{2}/g;
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

  /**
   * This is doing the actual replacements using regex.
   *
   * @param {String} g The string to do the replacements with.
   * @returns {String} The string with the replaced smart punctuation.
   */
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

  /**
   * The starting method.
   *
   * @returns {Boolean|String} False, if not called from the command line,
   *  the new typographically correct string otherwise.
   */
  var main = function () {
    var activeElement = document.activeElement;
    if (!isTextField(activeElement)) {
      return false;
    }
    return processTextField(activeElement);
  }; main();
});
