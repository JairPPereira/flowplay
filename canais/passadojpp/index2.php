<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passado</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
    setInterval(function(){
        location.reload();
    }, 20 * 1000);
</script>
</head>
<body>

  
<div id="title"></div>






<?php
// URL da API
$url = 'https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv';

// Inicializa a biblioteca cURL
$ch = curl_init();

// Configura as opções da chamada cURL
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Faz a chamada à API usando o proxy
$data = file_get_contents($url);

// Fecha a biblioteca cURL
curl_close($ch);

// Decodifica o JSON retornado pela API
$musicInfo = json_decode($data);

// Pega o título da música
$title = $musicInfo->title;

// Imprime o título da música
echo "<p>Título da música: $title</p>";
?>

</body>
</html>