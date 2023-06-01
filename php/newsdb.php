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

$sql = "SELECT * FROM news";
$result = connection()->query($sql);

if ($result->num_rows > 0) {
    $articles = array();

    while ($row = $result->fetch_assoc()) {
        $articles[] = $row;
    }

    $articles = array_reverse($articles);

    foreach ($articles as $article) {
        $title = $article['title'];
        $author = $article['author'];
        $content = $article['content'];

        echo '<div class="news-article">';
        echo '<div class="title">' . $title . '</div>';
        echo '<div class="content">' . nl2br($content) . '</div>';
        echo '<div class="author">' . $author . '</div>';
        echo '</div>';
    }
} else {
    echo '<div class="news-article">';
    echo '<div class="content"><center>Nici o noutate nu a fost scrisă până în acest moment. <strong>Fii tu primul!</strong></center></div>';
    echo '</div>';
}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $content = $_POST['content'];

        $sql = "INSERT INTO news (title, author, content) VALUES ('$title', '$author', '$content')";
        $result = connection()->query($sql);

        if ($result) {
            header('Location: ../news.php');
            exit;
        }
}
?>