// Saves JSON from an API URL or JSON file and stores it in a JavaScript variable named data
function fetchJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

function init() {
  fetchJSON('data.json', function(data) {
    for (var i = 0; i < data.articles.length; i++) {
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      document.getElementById('showStory').appendChild(articleImage);

      var articleSource = document.createElement('p');
      articleSource.innerHTML = data.articles[i].source.name;
      document.getElementById('showStory').appendChild(articleSource);

      var articleAuthor = document.createElement('p');
      articleAuthor.innerHTML = data.articles[i].author;
      document.getElementById('showStory').appendChild(articleAuthor);

      var articleTitle = document.createElement('p');
      articleTitle.innerHTML = data.articles[i].title;
      document.getElementById('showStory').appendChild(articleTitle);

      var articleContent = document.createElement('p');
      articleContent.innerHTML = data.articles[i].content;
      document.getElementById('showStory').appendChild(articleContent);
    }
  });
}

window.onload = init;
