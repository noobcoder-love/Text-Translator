chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "translateText",
      title: "Translate to Hindi",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translateText") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: translateSelectedText
      });
    }
  });
  
  function translateSelectedText() {
    let selectedText = window.getSelection().toString();
    if (selectedText) {
      fetch(`https://api.mymemory.translated.net/get?q=${selectedText}&langpair=en|hi`)
        .then(response => response.json())
        .then(data => {
          alert(`Translation: ${data.responseData.translatedText}`);
        })
        .catch(error => console.error('Error:', error));
    }
  }
  