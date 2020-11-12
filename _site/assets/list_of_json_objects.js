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
      var articleSource = document.createElement('p');
      var articleAuthor = document.createElement('p');
      var articleTitle = document.createElement('p');
      var articleContent = document.createElement('p');

      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      document.getElementById('showStory').appendChild(articleImage);

      articleSource.innerHTML = data.articles[i].source.name;
      document.getElementById('showStory').appendChild(articleSource);

      articleAuthor.innerHTML = data.articles[i].author;
      document.getElementById('showStory').appendChild(articleAuthor);

      articleTitle.innerHTML = data.articles[i].title;
      document.getElementById('showStory').appendChild(articleTitle);

      articleContent.innerHTML = data.articles[i].content;
      document.getElementById('showStory').appendChild(articleContent);
    }
  });
}

window.onload = init;
