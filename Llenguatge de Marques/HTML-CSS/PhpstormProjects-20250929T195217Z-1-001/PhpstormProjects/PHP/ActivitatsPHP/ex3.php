<?php

$frase = chr(rand(97,122)).chr(rand(97,122)).chr(rand(97,122)).chr(rand(97,122)).chr(rand(97,122));
if ($frase == strrev($frase)) {
    echo $frase;
    echo "<br>";
    echo "es un palindrom";
}
else{
    echo $frase;
    echo "<br>";
    echo "no es un palindrom";
}