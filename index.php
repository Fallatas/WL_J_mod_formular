<html>
<head>
    <title>Input Felder</title>
    <script src="jquery.inview.min.js"></script>
    <script src="layout.js"></script>
</head>
<body>
    <form action="index.php" method="post">
        <fieldset style="width: 300px">
        <h3 style="background-color: #00A8C6">Erstellung eines Accounts.</h3>
            <p>Um Ihren Account zu erstllen füllen Sie bitte die unten stehenden Felder aus.</p>
        <label>Vorname:</label> <br>
        <input name="vorname" id="vorname" class="feld1" minlength="1" maxlength="10" required> <br>
        <span id="nachricht1"></span> <br>
        <label>Nachname:</label> <br>
        <input name="nachname" id="nachname" class="feld2" minlength="1" maxlength="10" required> <br>
        <span id="nachricht2"></span> <br>
        <label>Passwort:</label> <br>
        <input type="password" name="passwort" id="passwort" class="feld3" minlength="5" maxlength="11" required> <br>
        <span id="nachricht3"></span> <br>
        <input type="submit" value="Senden">
        </fieldset>
    </form>
    <?php

    ?>

    <?php
    if(isset($_POST["vorname"]) && isset($_POST["nachname"]) && isset($_POST["passwort"])) {
        $pfad = "./benutzer/" . $_POST["vorname"];
        $datei = "./benutzer/" . $_POST["vorname"] . "/zugangsdaten.txt";

        $uservorname = "Der Vorname leutet: " . $_POST["vorname"] . "\n";
        $usernachname = "Der Nachname lautet: " . $_POST["nachname"] . "\n";
        $userpasswort = "Das Passwort lautet: " . $_POST["passwort"] . "\n";

        mkdir($pfad);
        $handle = fopen("$datei", "w");

        fputs($handle,$uservorname);
        fputs($handle,$usernachname);
        fputs($handle,$userpasswort);

        if (file_exists($pfad)){
            echo "User hat sich bereits registriert.";
            fclose($handle);
        }





    }
    ?>
</body>
</html>