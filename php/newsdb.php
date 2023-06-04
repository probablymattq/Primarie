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

showNews();

function showNews()
{
    $sql = "SELECT * FROM news";
    $result = connection()->query($sql);

    if ($result->num_rows > 0) {
        $articles = [];

        while ($row = $result->fetch_assoc()) {
            $articles[] = $row;
        }

        $articles = array_reverse($articles);

        foreach ($articles as $article) {
            $title = $article["title"];
            $author = $article["author"];
            $content = $article["content"];

            echo '<div class="news-article">';
            echo '<div class="title">' . $title . "</div>";
            echo '<div class="content">' . nl2br($content) . "</div>";
            echo '<div class="author">' . $author . "</div>";
            echo "</div>";
        }
    } else {
        echo '<div class="news-article">';
        echo '<div class="content"><center>Nici o noutate nu a fost scrisă până în acest moment. <strong>Fii tu primul!</strong></center></div>';
        echo "</div>";
    }
}

if (
    $_SERVER["REQUEST_METHOD"] === "POST" &&
    isset($_POST["form_key"]) &&
    $_POST["form_key"] === "Form"
) {
    $title = $_POST["title"];
    $author = $_POST["author"];
    $content = $_POST["content"];

    $sql = "INSERT INTO news (title, author, content) VALUES ('$title', '$author', '$content')";
    $result = connection()->query($sql);

    if ($result) {
        header("Location: ../news.php");
        exit();
    }
}

if (isset($_POST["action"])) {
    $action = $_POST["action"];

    if ($action === "deleteNews") {
        $title = $_POST["title"];
        $content = $_POST["content"];
        $author = $_POST["author"];

        showNews();

        deleteNews($title, $content, $author);
        exit();
    }
}

function deleteNews($title, $content, $author)
{
    $sql = "DELETE FROM news WHERE title = '$title' AND REPLACE(content, '\r', '') = '$content' AND author = '$author'";
    connection()->query($sql);
}
?>
