    // Função para fazer uma solicitação HTTP GET
    function httpGet(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200)
                callback(xhr.responseText);
        }
        xhr.open("GET", url, true);
        xhr.send();
    }

    // URL do seu serviço proxy
    var baseUrl = "https://api.allorigins.win/get?url=";
    var apiUrl = "https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv";

    // Função para processar a resposta JSON e extrair os trechos desejados
    function extractAndDisplay(jsonString) {
        var data = JSON.parse(jsonString);
        var contents = JSON.parse(data.contents);
        var title = contents.title;

        // Exibir o título na página HTML e aplicar estilos
        var outputElement1 = document.getElementById("output1");
        var outputElement2 = document.getElementById("output2");
        outputElement1.innerText = title;
        outputElement2.innerText = title; // Altere esta linha conforme necessário

        // Montar a URL para a próxima API com o título
        var itunesApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://itunes.apple.com/search?term=" + title + "&country=us&media=music&entity=song&limit=1&lang=pt_br&explicit=No&version=2");

        // Fazer solicitação HTTP para a próxima API
        httpGet(itunesApiUrl, function(response) {
            var imageData = JSON.parse(response);
            var results = JSON.parse(imageData.contents).results;

            // Obter a URL da imagem
            var imageUrl = results[0].artworkUrl100;

            // Construir a URL da imagem em tamanho desejado
            var imageUrlModified = imageUrl.replace(/100x100bb\.jpg$/, "150x150bb.jpg");

            // Remover a imagem anterior, se houver
            var imageContainer = document.getElementById("imageContainer");
            while (imageContainer.firstChild) {
                imageContainer.removeChild(imageContainer.firstChild);
            }

            // Exibir a nova imagem na página HTML
            var imageElement = document.createElement("img");
            imageElement.src = imageUrlModified;
            imageContainer.appendChild(imageElement);
        });
    }

    // Função para fazer a primeira solicitação e iniciar o processo de atualização
    function updateData() {
        var timestamp = new Date().getTime(); // Carimbo de data e hora atual
        var url = baseUrl + encodeURIComponent(apiUrl + "?timestamp=" + timestamp); // Adiciona o carimbo de data e hora à URL
        httpGet(url, extractAndDisplay);
    }

    // Chamar a função de atualização pela primeira vez
    updateData();

    // Atualizar a cada 20 segundos
    setInterval(function() {
        updateData();
    }, 20 * 1000);