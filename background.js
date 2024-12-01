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
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async function(tab) {
      try {
        await chrome.scripting.executeScript({
          target: {
            tabId: tab[0].id,
          },
          files: ["content.js"],
        });
      } catch (err) {
        console.error(`failed to execute more-better-ctrlw script: ${err}`);
      }
    });
  }
});
