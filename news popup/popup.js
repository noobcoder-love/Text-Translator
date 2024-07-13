document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('news', function (data) {
      const newsContainer = document.getElementById('news');
      if (data.news) {
        data.news.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
  
          const title = document.createElement('h2');
          title.textContent = article.title;
          articleDiv.appendChild(title);
  
          const description = document.createElement('p');
          description.textContent = article.description;
          articleDiv.appendChild(description);
  
          const link = document.createElement('a');
          link.href = article.url;
          link.textContent = 'Read more';
          link.target = '_blank';
          articleDiv.appendChild(link);
  
          newsContainer.appendChild(articleDiv);
        });
      } else {
        newsContainer.textContent = 'No news available.';
      }
    });
  });
  