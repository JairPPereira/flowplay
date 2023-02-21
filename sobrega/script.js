function fetchAndUpdateText() {
    const apiUrl = 'https://ssl.xcast.com.br:8290/currentsong?sid=1';
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => {
        const songText = data;
        document.getElementById('song-text').textContent = songText;
      })
      .catch(error => console.error(error));
  }
  
  // Executa a função fetchAndUpdateText() imediatamente e, em seguida, a cada 30 segundos
  setInterval(fetchAndUpdateText, 30000);
  