<?php
session_start();

static $servername = "localhost";
static $username = "root";
static $password = "";
static $dbname = "primarie";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function connection()
{
    return $GLOBALS["conn"];
}

if (isset($_POST["action"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $content = $_POST["content"];

    $sql = "INSERT INTO contact (name, email, number, content) VALUES ('$name', '$email', '$number', '$content')";
    $result = connection()->query($sql);

    if ($result) {
        $response = [
            "success" => true,
            "message" => "Mesajul a fost trimis",
        ];
        echo json_encode($response);
        exit();
    }
}
?>
