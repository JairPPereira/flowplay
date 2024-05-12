const API_KEY = 'fcfe44809de84129fab53e785124bb95';
const MOVIE_ID = 774825;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Faz a solicitação AJAX para a API TMDb
fetch(`https://api.themoviedb.org/3/movie/774825?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    const movieElement = document.getElementById('movie');

    // Cria o HTML dinamicamente com base nos dados da API
    const html = `
      <h1>${data.title}</h1>
      <p><strong>Gêneros:</strong> ${data.genres.map(genre => genre.name).join(', ')}</p>
      <img src="${IMAGE_BASE_URL}${data.poster_path}" alt="${data.title} Poster">
      <p><strong>Sinopse:</strong> ${data.overview}</p>
      <p><strong>Nota:</strong> ${data.vote_average}</p>
      <p><strong>Data de lançamento:</strong> ${data.release_date}</p>
      <p><strong>Duração:</strong> ${data.runtime} minutos</p>
    `;

    // Adiciona o HTML à página
    movieElement.innerHTML = html;
  })
  .catch(error => console.error(error));
