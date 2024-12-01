// COPYD:
// https://github.com/1995eaton/chromium-vim/blob/1.2.99/content_scripts/dom.js#L18-L43
window.DOM = {
  isEditable: function(element) {
    if (!element) {
      return false;
    }
    if (element.localName === 'textarea' ||
        element.localName === 'select' ||
        element.hasAttribute('contenteditable')) {
      return true;
    }
    if (element.localName !== 'input') {
      return false;
    }
    var type = element.getAttribute('type');
    switch (type) {
    case 'button':
    case 'checkbox':
    case 'color':
    case 'file':
    case 'hidden':
    case 'image':
    case 'radio':
    case 'reset':
    case 'submit':
    case 'week':
      return false;
    }
    return true;
  },
}

// Listen for messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var selection = document.getSelection();

  // COPYD:
  // https://github.com/1995eaton/chromium-vim/blob/1.2.99/content_scripts/mappings.js#L744-L753
  function modify() {
    if (arguments.length === 3) {
      selection.modify.apply(selection, arguments);
      return;
    }
    selection.modify.bind(
        selection,
        selection.type === 'Range' ? 'extend' : 'move'
    ).apply(null, arguments);
  }

  // COPYD:
  // https://github.com/1995eaton/chromium-vim/blob/1.2.99/content_scripts/mappings.js#L755-L761
  function deleteSelection() {
    if (selection.type === 'Range' && selection.toString().length !== 0) {
      document.execCommand('delete', false, 0);
      return true;
    }
    return false;
  }

  // COPYD:
  // https://github.com/1995eaton/chromium-vim/blob/1.2.99/content_scripts/messenger.js#L206-L212
  switch (request.action) {
    case 'deleteBackWord':
      //if (!insertMode && DOM.isEditable(document.activeElement)) {
      if (DOM.isEditable(document.activeElement)) {
        // Mappings.insertFunctions.deleteWord();
        // if (Command.commandBarFocused() && Command.type === 'action')
        //   Command.complete(Command.input.value);
        modify('extend', 'left', 'word');
        deleteSelection();
      }
      break;
    }

    // This return value is unused by background.js.
    // - We could omit it, in which case background.js doesn't
    //   need to include a response callback to handle it.
    // - But we'll leave it for illustrative purposes.
    // - See comment in background.js for more.
    return true;
  }
);

