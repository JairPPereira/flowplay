<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<body>


<audio autoplay="autoplay" controls="controls">
<source src="http://fluoz.zeno.fm:80/2cgy8mzvsy8uv/source" type="audio/mp3" />
seu navegador não suporta HTML5
</audio>
  

<?php
header("Access-Control-Allow-Origin: *");

$url = 'https://zenoplay.zenomedia.com/api/zenofm/nowplaying/2cgy8mzvsy8uv';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($ch);
curl_close($ch);

echo $data;
?>
    <div id="title"></div>
</body>
</html>