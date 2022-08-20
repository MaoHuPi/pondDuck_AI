<?php
$path = 'mlduck_generationList.json';
if(@$_POST['json']){
    $file = fopen($path, 'w');
    $content = fwrite($file, $_POST['json']);
    fclose($file);
    echo $content;
}
else{
    echo 'false';
}