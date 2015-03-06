<!DOCTYPE html>
<html>
    <body>
        <?php
            $servername = "localhost";
            $username = "root";
            $password = "4edxz7yhbn";
            $db = "alphatesting1";
            $User = "MrabEzreb";
$testFile = fopen("sendEmail.php", "w");
$newIndexText = <<<EOD
<!DOCTYPE html>
<html>
    <body>
        <?php
            try {
                [$]conn = new PDO("mysql:host=\$servername;dbname=$db", $username, $password);
                // set the PDO error mode to exception
                [$]conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException [$]e)
                {
                echo "Connection failed: " . [$]e->getMessage();
                }
            [$]sql = "UPDATE Profiles SET isActive=1 WHERE username='$User'";
            [$]conn->exec([$]sql);
    </body>
</html>
EOD;
fwrite($testFile, $newIndexText);
fclose($testFile);
        ?>
    </body>
</html>