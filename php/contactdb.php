<?php
session_start();

STATIC $servername = "localhost";
STATIC $username = "root";
STATIC $password = "";
STATIC $dbname = "primarie";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function connection()
{
    return $GLOBALS['conn'];
}

if(isset($_POST['action'])) {
     $name = $_POST['name'];
     $email = $_POST['email'];
     $number = $_POST['number'];
     $content = $_POST['content'];

     $sql = "INSERT INTO contact (name, email, number, content) VALUES ('$name', '$email', '$number', '$content')";
     $result = connection()->query($sql);

     if ($result) {
         $response = array(
             'success' => true,
             'message' => 'Mesajul a fost trimis'
         );
         echo json_encode($response);
         exit;
     }
 }
?>