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