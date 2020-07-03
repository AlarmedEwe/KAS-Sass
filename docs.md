<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>KAS-SASS</title>
    <link rel="shortcut icon" href="images/logo-32.png" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" />
    <link rel="stylesheet" href="_css/KAS.css">
    <style>
        a { color: #D80; }
        a:hover, a:active, a:focus { color: #B50; }
        main { padding-bottom: 1em; padding-top: 1em; }
    </style>
    <style>
        aside, section { height: calc(100vh - 82px - 97px - 1.5rem); }
        .scroll { overflow-y: auto; }
        ul.scroll { height: calc(100vh - 83px - 97px - 1.5rem - 50px) }
        .src { height: 50px; }
        .search a {
            display: block;
            width: 100%;
            text-decoration: none;
            padding: 5px 0;
        }
        .holder-10 {
            display: inline-block;
            width: 100px;
            height: 1em;
            background-color: #CCC;
        }
        .holder-5 {
            display: inline-block;
            width: 50px;
            height: 1em;
            background-color: #CCC;
        }
    </style>
</head>
<body>
    <header class="menu menu-fixed bg-dark">
        <div class="mob-menu">
            <h1>
                <a href="index.md" style="display: flex; align-items: center; text-decoration: none;">
                    <img height="40" src="images/logo-64.png" alt="">
                    <span>KAS-SASS</span>
                </a>
            </h1>
            <div class="open-menu"><i class="fa fa-bars"></i></div>
        </div>
        <ul>
            <li><a href="docs.md">Documentação</a></li>
        </ul>
    </header>

    <main>
        <aside class="col col-sidebar">
            <div class="form src">
                <input type="text" id="src" placeholder="Procurar..." />
            </div>
            <ul class="scroll search">
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-5"></span> <span class="holder-10"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-5"></span> <span class="holder-5"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-5"></span> <span class="holder-10"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-5"></span> <span class="holder-5"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-5"></span> <span class="holder-10"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="holder-10"></span> <span class="holder-5"></span>
                    </a>
                </li>
            </ul>
        </aside>
        <section class="col col-content scroll" style="margin-top: 0;">
            <h1>Em breve</h1>
            <p>A Documentação está sendo escrita e logo estará disponível bem aqui. xD</p>
        </section>
    </main>

    <footer class="bg-primary acenter">
        <p style="margin-bottom: .25em;">&copy;2020 &bull; Developed by <a href="https://github.com/AlarmedEwe" target="_blank">GM-Luiz</a></p>
        <p style="font-size: .8em;"><a href="mailto:">Reportar erro ou entrar em contato.</a></p>
    </footer>

    <script src="js/KAS.js"></script>
</body>
</html>