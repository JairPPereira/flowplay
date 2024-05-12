<?php
// URL da API
$url = 'https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv';

// Faz a chamada à API e obtém os dados
$data = file_get_contents($url);

// Decodifica o JSON retornado pela API
$musicInfo = json_decode($data);

// Retorna os dados como JSON para a chamada AJAX
echo json_encode($musicInfo);
?>
