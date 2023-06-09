<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Primăria Coșcalia</title>
    <link rel="icon" href="https://cdn.glitch.global/0eece017-3a64-4ab8-942c-61c5ccca461d/logo.png?v=1682666429363" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <link rel="stylesheet" href="css/navbar.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/sidebar.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/news.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/footer.js"></script>
  </head>
  <!--Navigation bar-->
  <header>
    <img src="https://cdn.glitch.global/0eece017-3a64-4ab8-942c-61c5ccca461d/co%C8%99calia%20gradient.png?v=1684871319106" alt="stema" />
    <nav>
      <ul>
        <li>
          <a href="index.html">Principal</a>
        </li>
        <li>
          <a href="#" style="color: #2871fa">Noutăți</a>
        </li>
        <li>
          <a href="services.html">Servicii</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <i class='fas fa-user-alt' id='signin-btn'></i>
        </li>
      </ul>
    </nav>
    <div class="menu-toggle">
      <button class="menubutton">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
    <div id="sidebar-overlay"></div>
    <div class="signin">
      <form onsubmit="login(); return false;">
        <input type="text" id="username" name="username" placeholder="Nume de utilizator" required>
        <input type="password" id="password" name="password" placeholder="Parola" required>
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="sidebar">
      <ul>
        <li>
          <a href="index.html">Principal</a>
        </li>
        <li>
          <a href="#" style="color: #2871fa">Noutăți</a>
        </li>
        <li>
          <a href="services.html">Servicii</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <i class='fas fa-user-alt' id='signin-btn-2'></i>
        </li>
      </ul>
    </div>
  </header>
  <body>
    <div id="overlay"></div>
    <div id="formContainer">
      <h2 style="text-align: center;">Adaugă informații</h2>
      <form action="php/newsdb.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="form_key" value="Form">
        <input type="text" name="title" placeholder="Titlu" required>
        <input type="text" name="author" placeholder="Autor" required>
        <textarea name="content" placeholder="Conținut" required></textarea>
        <button type="submit">Adaugă</button>
      </form>
      <button id="closeFormButton">Închide formularul</button>
    </div>
    <button id="scrollToTopBtn" onclick="scrollToTop()">
      <i class="fas fa-arrow-up"></i>
    </button>
    <div class="section-container">
      <div class="section">
        <div class="page-name" id="news-name"></div>
      </div>
    </div>
    <div id="window"></div>
    <button id="openFormButton">Adaugă un articol</button>
    <div id="contentContainer">
      <div class="news-container"> <?php include "php/newsdb.php"; ?> </div>
    </div>
  </body>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-section">
        <img src="https://cdn.glitch.global/0eece017-3a64-4ab8-942c-61c5ccca461d/logo.png?v=1682666429363" alt="Image 1" />
      </div>
      <div class="footer-section"></div>
      <div class="footer-section"></div>
      <div class="footer-section"></div>
      <div class="footer-section">
        <h3>Despre noi</h3>
        <p> Coșcalia este un sat pitoresc din Republica Moldova, situat în raionul Căușeni. Cu o populație prietenoasă și tradiții bogate, satul oferă o atmosferă autentică, îmbinând frumusețea naturală a peisajului rural cu istoria și cultura locală. </p>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>
          <a href="tel:+37324366236">
            <i class="fas fa-phone"></i> +37324366236 </a>
          <br />
          <a href="https://www.facebook.com/natalia.tibirna.712">
            <i class="fab fa-facebook"></i> Primaria Satului Coscalia </a>
          <br />
          <a href="mailto:primariacoscalia@mail.ru">
            <i class="fas fa-envelope"></i> primariacoscalia@mail.ru </a>
        </p>
      </div>
    </div>
  </footer>
  <script src="script/navbar.js"></script>
  <script src="script/main.js"></script>
  <script src="script/news.js"></script>
  <script src="script/footer.js"></script>
</html>