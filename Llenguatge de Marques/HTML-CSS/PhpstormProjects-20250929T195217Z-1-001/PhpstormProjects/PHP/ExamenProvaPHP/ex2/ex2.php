<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "videojocexamen";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $TitolVideojoc = $_GET["TitolVideojoc"];
    try {
        $query = $conn->prepare("select * from videojocs where TitolVideojoc = :TitolVideojoc");
        $query->bindParam(":TitolVideojoc",$TitolVideojoc, PDO::PARAM_STR);
        $query->execute();

        if($query->rowCount() > 0){
            $result =["Estat"=>"Okay","puntuacio"=>$query->fetch()];
            print_r(json_encode($result));
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


