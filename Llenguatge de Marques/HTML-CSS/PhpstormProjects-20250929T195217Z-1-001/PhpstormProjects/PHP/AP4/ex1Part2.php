<?php

include "ex1.php";

$alturaCilindre = rand(0,100);
$radiCilindre = rand(0,100);
$radiEsfera = rand(0,100);

volumenCilindre($radiCilindre,$alturaCilindre);
echo "<br>";
volumenEsfera($radiEsfera);