chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({profiles: []});
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fillForm') {
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        function: fillForm,
        args: [request.details]
      });
    }
  });
  
  function fillForm(details) {
    for (const key in details) {
      const element = document.querySelector(`[name="${key}"]`);
      if (element) {
        element.value = details[key];
      }
    }
  }
  