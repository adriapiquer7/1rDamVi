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
        $query = $conn->prepare("SELECT * FROM usuari WHERE email = :email");
        $query->bindParam(":email",$email, PDO::PARAM_STR);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        if($query->rowCount() > 0){
            $result = ["Estat"=>"KO", "Missatge"=>"L'usuari ja existeix a la base de dades..."];
            print_r(json_encode($result));
        }
        elseif (!str_ends_with($email,"@ies-sabadell.cat")){
            $result = ["Estat"=>"KO", "Missatge"=>"El correu no es valid..."];
            print_r(json_encode($result));
        }
        else{
            $query = $conn->prepare("insert into usuari(email, contrasenya) values (:email, :contrasenya)");
            $query->bindParam(":email",$email, PDO::PARAM_STR);
            $query->bindParam(":contrasenya",$contrasenya, PDO::PARAM_STR);
            $query->execute();
            $result = ["Estat"=>"OK", "Missatge"=>"L'usuari s'ha introduit a la base de dades"];
            print_r(json_encode($result));
        }

    } catch (Exception $exception) {
        print_r($exception->getMessage());
    }

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

