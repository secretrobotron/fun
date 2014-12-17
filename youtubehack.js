/*
  Instructions:
  1. Go to your youtube history page
  2. Scroll down to reveal the "Load More" button
  3. Copy & paste this script into a dev console.
  4. Wait.
*/

var times = 0;

var watchList = [];

function makeFile () {
  var fileContent = '';
  console.log(watchList);
  watchList.forEach(function (item) {
    fileContent += item.url + '\t' + item.title + '\n';
  });
  var blob = new Blob([fileContent], {type: 'octet/stream'});
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = 'youtube-history.csv';
  a.click();
}

function getWatches (responseString) {
  var watchUrls = responseString.match(/data-context-item-id=\\"([^\\]+)/g);
  var watchTitles = responseString.match(/dir=\\"ltr\\" title=\\"([^"]+)/g);
  console.log('got ' + watchTitles.length + ' / ' + watchUrls.length);
  for (var i = 0; i < watchTitles.length; ++i) {
    var title = watchTitles[i].substr(20);
    var url = watchUrls[i].substr(23);
    title = title.substr(0, title.length - 1);
    watchList.push({title: title, url: url});
  }
}

function go (url) {
  console.log('(' + times + ') extracting from ' + url);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    window.g = xhr.response;
    getWatches(xhr.response);

    var newUrl = xhr.response.match(/data-uix-load-more-href....([^"]+)/);
    if (++times < 200 && newUrl) {
      newUrl = unescape(unescape(newUrl[1]));
      newUrl = newUrl.replace('\\u0026', '&');
      go(newUrl);
    }
    else {
      console.log('done');
      makeFile();
    }
  };
  xhr.send();
}
go(document.querySelector('.browse-items-load-more-button').getAttribute('data-uix-load-more-href'));