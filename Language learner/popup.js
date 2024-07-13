document.getElementById('translateBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: () => {
          let selectedText = window.getSelection().toString();
          if (selectedText) {
            fetch(`https://api.mymemory.translated.net/get?q=${selectedText}&langpair=en|hi`)
              .then(response => response.json())
              .then(data => {
                alert(`Translation: ${data.responseData.translatedText}`);
              })
              .catch(error => console.error('Error:', error));
          } else {
            alert('Please select some text to translate.');
          }
        }
      });
    });
  });
  