chrome.commands.onCommand.addListener(command => {
  if (command === "close-highlighted-windows") {
    var highlightedQuery = {
      highlighted: true,
      currentWindow: true,
    };

    chrome.tabs.query(highlightedQuery, tabs => {
      chrome.tabs.remove(tabs.map(tab => tab.id));
    });
  }
  else if (command === "deleteBackWord") {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tab) {
      chrome.tabs.sendMessage(
        tab[0].id,
        {action: 'deleteBackWord'},
        // If we omit this handler, Chrome Extensions page shows error:
        //   Uncaught (in promise) Error: A listener indicated an asynchronous
        //   response by returning true, but the message channel closed before
        //   a response was received
        // - ALTLY: Don't `return true` from content script, and then we don't
        //   need this callbacK.
        (response) => {},
      );
    });
  }
});
