<?php

$random = rand(1,20);

for ($i = $random; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo "x";
    }
    echo "<br>";
}