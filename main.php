<?php
    header('Access-Control-Allow-Origin: *');
    $xml=simplexml_load_file("anime.xml");
    // print_r($xml) ;
    $toJSON = json_encode($xml);
    echo $toJSON;
?> 
