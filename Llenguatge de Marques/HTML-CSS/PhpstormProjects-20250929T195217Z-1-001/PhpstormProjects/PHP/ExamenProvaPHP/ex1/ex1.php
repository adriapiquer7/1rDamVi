<?php
session_start();
$nomJoc = $_GET["TitolVideojoc"];
$_SESSION["nomJoc"] = $nomJoc;
$_SESSION["puntuacio"]= rand(1,10);
echo "Nom Video joc: $nomJoc".", Puntuació: ".$_SESSION["puntuacio"];


