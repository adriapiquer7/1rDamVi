<?php

function volumenCilindre($radi, $altura)
{
    $nombrePI = M_PI;
    $volumen = $nombrePI*$radi**2*$altura;
    echo "el radi del ciclindre es: ".$radi.", i la seva altura es: ".$altura."<br>";
    echo "el seu volum es: ".$volumen;
}

function volumenEsfera($radi)
{
    $nombrePI = M_PI;
    $volumen = 4/3*$nombrePI*$radi**3;
    echo "el radi de la esfera es: ".$radi."<br>";
    echo "el seu volum es: ". $volumen;
}