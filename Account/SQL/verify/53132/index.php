<!DOCTYPE html>
<html>
    <body>
        <?php
            try {
                $conn = new PDO("mysql:host=10.0.0.20;dbname=0fe_16464972_main", "0fe_16464972", "4edxz7yhbn");
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
            $sql = "UPDATE Profiles SET isActive=1 WHERE username='MrabEzrebT'";
            $conn->exec($sql);
            $conn = null;
            mkdir("../../../../../Profiles/MrabEzrebT");
            mkdir("../../../../../Profiles/MrabEzrebT/data");
            $indexFile = fopen("../../../../../Profiles/MrabEzrebT/index.html", "w");
            $indexData = <<<EOT
<!DOCTYPE html>
<html>
    <head><script src="javascripts/scriptLoader.js"></script></head>
    <body>
        <announcement></announcement>
        <nav array="main" active=0></nav>
        <div class="jumbotron">
            <br>
            <br>
            <h1>Hey there! This will be your profile page eventually! For now, it is not editable, but once you can edit it, it will be virtually limitless as to how you can customize it! :D</h1>
        </div>
    </body>
</html>
EOT;
            fwrite($indexFile, $indexData);
            fclose($indexFile);
            echo "<meta http-equiv=\"refresh\" content=\"5; url=../../../Login\">";
        ?>
        <h1>Thank you! You will be redirected to the Login page in 5 seconds.</h1>
    </body>
</html>