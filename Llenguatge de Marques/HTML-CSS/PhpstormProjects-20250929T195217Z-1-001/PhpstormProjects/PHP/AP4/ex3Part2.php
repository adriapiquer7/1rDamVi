<?php

session_start();

if (isset($_SESSION["visites"])) {
    echo "Aquesta pàgina s'ha visitat ".$_SESSION["visites"]." vegada/es.";
} else {
    echo "Aquesta pàgina encara no s'ha visitat.";
}