<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "anime_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    try {
        $query = $conn->prepare("select * from usuari");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        if($query->rowCount() > 0){
            print_r(json_encode(["Estat"=>"OK","result"=>$result]));
        }
        else{
            $result =["Estat"=>"KO"];
            print_r(json_encode($result));
        }

    } catch (Exception $exception) {
        print_r($exception->getMessage());
    }

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

