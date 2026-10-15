<?php

$random = rand(1,10);

for ($i = 1; $i <= 10; $i++) {
    echo $i."*".$random."=".$i*$random."<br>";
}