/* exported data */
function playerStats() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'GET https://www.balldontlie.io/api/v1/stats');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      console.log(xhr.status);
      console.log(xhr.response);
    });
    xhr.send();
  }
  playerStats();
  