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
    document.getElementById('articleImageUrl').src = data.articles[0].urlToImage;
    document.getElementById('articleSource').innerHTML = data.articles[0].source.name;
    document.getElementById('articleAuthor').innerHTML = data.articles[0].author;
    document.getElementById('articleTitle').innerHTML = data.articles[0].title;
    document.getElementById('articleContent').innerHTML = data.articles[0].content;
  });
}

window.onload = init;
