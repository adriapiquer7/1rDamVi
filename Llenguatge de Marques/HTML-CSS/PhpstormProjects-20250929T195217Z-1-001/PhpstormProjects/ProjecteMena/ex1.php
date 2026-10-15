<?php
$servername = "localhost";
$username = "root";
$password = "super3";
$dbname = "minadb";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $nomUsuari = $_POST["nomUsuari"];
    $contrasenya = $_POST["contrasenya"];
    try {
        $query = $conn->prepare("select score from usuaris where nomUsuari = :nomUsuari and contrasenya = :contrasenya");
        $query->bindParam(":nomUsuari",$nomUsuari, PDO::PARAM_STR);
        $query->bindParam(":contrasenya",$contrasenya, PDO::PARAM_STR);
        $query->execute();

        if($query->rowCount() > 0){
            $result =["Estat"=>"Okay", "score"=>$query->fetch()];
            print_r(json_encode($result));
            setcookie($nomUsuari,$contrasenya, time()+3600);
        } else {
            $result =["Estat"=>"error"];
            print_r(json_encode($result));
        }
    } catch (Exception $exception) {
        print_r($exception->getMessage());
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


