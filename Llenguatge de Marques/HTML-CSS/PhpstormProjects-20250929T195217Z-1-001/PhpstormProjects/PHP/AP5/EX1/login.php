<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "anime_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $email = $_POST["email"];
    $contrasenya = $_POST["contrasenya"];
    try {
        $query = $conn->prepare("select * from usuari where email = :email and contrasenya= :contrasenya");
        $query->bindParam(":email",$email, PDO::PARAM_STR);
        $query->bindParam(":contrasenya",$contrasenya, PDO::PARAM_STR);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        if($query->rowCount() > 0){
            $result = ["Estat"=>"OK", "Missatge"=>"L'usuari s'ha registrat correctament"];
            print_r(json_encode($result));
        }
        else{
            $result = ["Estat"=>"KO", "Missatge"=>"L'usuari no existeix a la base de dades"];
            print_r(json_encode($result));
        }

    } catch (Exception $exception) {
        print_r($exception->getMessage());
    }

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

