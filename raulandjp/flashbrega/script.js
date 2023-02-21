const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://radiojpp.000webhostapp.com/';

fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => {
    const songTitle = data.title;
    document.getElementById('song-title').textContent = songTitle;
  })
  .catch(error => console.error(error));
