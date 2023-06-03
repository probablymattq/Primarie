$(document).ready(function () {
    $("#openFormButton").click(function () {
        $("#formContainer").show();
        $("#overlay").show();
    });

    $("#closeFormButton").click(function () {
        $("#formContainer").hide();
        $("#overlay").hide();
        $("#window").hide();
    });
});

    $(document).click(function (e) {
        let append, title, content, author;

        const window = $("#window");
        const overlay = $("#overlay");

        function showWindow() {
            window.empty();
            window.append(append);
            window.show();
            overlay.show();
        }

        function closeWindow() {
            window.hide();
            overlay.hide();
        }

        if (e.target.id === "overlay") {
            $("#formContainer").hide();
            $("#overlay").hide();
            $("#window").hide();
        }

        if (e.target.className === "news-article") {
            title = e.target.childNodes.item(0);
            content = e.target.childNodes.item(1);
            author = e.target.childNodes.item(2);

            if (title && content && author) {
                append =
                    '<div class="articleWindow">' +
                    '<div class="title">' +
                    title?.innerHTML +
                    "</div>" +
                    '<div class="content">' +
                    content?.innerHTML +
                    "</div>" +
                    '<div class="author">' +
                    author?.innerHTML +
                    '</div><button id="deleteNews">Șterge</button>'
                showWindow();
            }

        } else if (e.target.parentNode.className === "news-article") {
            title = e.target.parentNode.childNodes.item(0);
            content = e.target.parentNode.childNodes.item(1);
            author = e.target.parentNode.childNodes.item(2);

            if (title && content && author) {
                append =
                    '<div class="articleWindow">' +
                    '<div class="title">' +
                    title?.innerHTML +
                    "</div>" +
                    '<div class="content">' +
                    content?.innerHTML +
                    "</div>" +
                    '<div class="author">' +
                    author?.innerHTML +
                    '</div><button id="deleteNews">Șterge</button>'
                showWindow();
            }
        }

        $(document).on('click', '#deleteNews', function () {
            $.ajax({
                url: 'php/newsdb.php',
                type: 'POST',
                data: {
                    action: 'deleteNews',
                    title: title?.textContent,
                    content: content?.textContent,
                    author: author?.textContent
                },
                success: function(response) {
                    $(".news-container").empty();
                    closeWindow();
                    $(".news-container").load('php/newsdb.php', { action: 'showNews' });
                },
                error: function(xhr, status, error) {
                    console.error("nu");
                }
            });
        });
    });

$(document).keydown(function (e) {
    if (e.which === 27 || e.keyCode === 27) {
        $("#formContainer").hide();
        $("#overlay").hide();
        $("#window").hide();
    }
});
