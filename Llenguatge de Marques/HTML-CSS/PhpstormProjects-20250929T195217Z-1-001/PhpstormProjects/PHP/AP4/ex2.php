<?php

$nom = "";
for ($i = 0; $i < 10; $i++) {
    $nom.=chr(rand(65,133));
}
setcookie("usuari",$nom, time()+3600);