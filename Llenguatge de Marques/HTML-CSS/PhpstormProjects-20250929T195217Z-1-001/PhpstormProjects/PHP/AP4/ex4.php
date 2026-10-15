<?php

$arrayAleatori = [];
for ($i = 0; $i < 4; $i++) {
    $arrayAleatori[] = rand(1, 10);
}

echo "L'array és: ";
print_r($arrayAleatori);
echo "<br>";

function estadins($array, $valor)
{
    return in_array($valor, $array);
}

$nums = [$_POST["num1"], $_POST["num2"], $_POST["num3"], $_POST["num4"]];

foreach ($nums as $num) {
    if (estadins($arrayAleatori, $num)) {
        echo "El nombre ".$num." es troba a dintre de l'array.<br>";
    } else {
        echo "El nombre ".$num." NO es troba a dintre de l'array.<br>";
    }
}