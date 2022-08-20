<?php
$path = 'mlduck_generationList.json';
$file = fopen($path, 'r');
$content = fread($file, filesize($path));
echo $content;