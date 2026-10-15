<?php

function nomsProductes(...$nomsProducte)
{
    $preuTotal=0;
    $productes=array();
    foreach ($nomsProducte as $producte) {
        $random = rand(0,10);
        $productes[$producte]=$random;
    }
    foreach ($productes as $producte => $preu) {
        echo $producte.": ".$preu."<br>";
        $preuTotal+=$productes[$producte];
    }
    echo $preuTotal;
    return $productes;
}

nomsProductes("pa", "llet", "pebrot", "pepi", "tomat", "petitchicken", "piña", "pure", "xoco", "biel");