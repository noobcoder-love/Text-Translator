const API_KEY = 'YOUR_NEWSAPI_KEY'; // Replace with your NewsAPI key

async function fetchNews() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  const data = await response.json();
  chrome.storage.local.set({ news: data.articles });
}

chrome.runtime.onInstalled.addListener(() => {
  fetchNews();
  chrome.alarms.create('fetchNews', { periodInMinutes: 60 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'fetchNews') {
    fetchNews();
  }
});
