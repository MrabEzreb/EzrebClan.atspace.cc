<!DOCTYPE html>
<html>
    <body>
        <?php
            $Name = $_POST["name"];
            $Email = $_POST["email"];
            $User = $_POST["username"];
            $Pass = $_POST["password"];
            // Alpha Server
            $servername = "10.0.0.20";
            $username = "0fe_16464972";
            $password = "4edxz7yhbn";
            $db = "0fe_16464972_main";
            // Beta Server
//            $servername = "mysql14.000webhost.com";
//            $username = "a9340268_test";
//            $password = "4edxz7yhbn";
//            $db = "a9340268_test";
            // Grendle Server
//            $servername = "mysql.grendelhosting.com";
//            $username = "u616060026_live";
//            $password = "4edxz7yhbn";
//            $db = "u616060026_live";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
            $stmt = $conn->prepare("SELECT name FROM Profiles WHERE email='$Email';"); 
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll();
            $number = count($result);
            if ($User == "Guest") {
                echo "You can not create an account with the username 'Guest'";
            } elseif ($number > 0) {
                echo "There is already an account with that email.";
            } else {
                $stmt2 = $conn->prepare("SELECT name FROM Profiles WHERE username='$User';"); 
                $stmt2->execute();
                $stmt2->setFetchMode(PDO::FETCH_ASSOC); 
                $result2 = $stmt2->fetchAll();
                $number2 = count($result2);
                if ($number2 > 0) {
                    echo "There is already an account with that username.";
                } else {
                    $ezrebPrefix = "ezreb_";
                    $hashcode = rand(0, 16581375);
                    $sql = "INSERT INTO Profiles
                        VALUES ($hashcode, '$Name', '$Email', '$User', '$Pass', false, '$ezrebPrefix"."$hashcode', '', 'false')";
                    $conn->exec($sql);
                }
            }
            $msg = "Hello! Thank you for registering at the Ezreb Clan Official Website!\nPlease go to this link: ".$_SERVER["SERVER_NAME"]."/Account/verify/$hashcode to complete your registration";
            $msg = wordwrap($msg,70);
            $headers = "From: noreply@Ezreb.dtdns.net" . "\r\n";
            mail($Email, "Test Email", $msg, $headers);
            mkdir("verify");
            mkdir("verify/$hashcode");
            $newFile = fopen("verify/$hashcode/index.php", "w");
            $testFile = fopen("sendEmail.php", "w");
            $newIndexText = <<<EOD
<!DOCTYPE html>
<html>
    <body>
        <?php
            try {
                \$conn = new PDO("mysql:host=$servername;dbname=$db", "$username", "$password");
                \$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException \$e)
                {
                echo "Connection failed: " . \$e->getMessage();
                }
            \$sql = "UPDATE Profiles SET isActive=1 WHERE username='$User'";
            \$conn->exec(\$sql);
            \$conn = null;
            mkdir("../../../../../Profiles/$User");
            mkdir("../../../../../Profiles/$User/data");
            \$indexFile = fopen("../../../../../Profiles/$User/index.html", "w");
            \$indexData = <<<EOT
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
            fwrite(\$indexFile, \$indexData);
            fclose(\$indexFile);
            echo "<meta http-equiv=\"refresh\" content=\"5; url=../../../Login\">";
        ?>
        <h1>Thank you! You will be redirected to the Login page in 5 seconds.</h1>
    </body>
</html>
EOD;
            fwrite($newFile, $newIndexText);
            fclose($testFile);
            fclose($newFile);
            //echo "<meta http-equiv=\"refresh\" content=\"0; url=../../\">";
            $conn = null;
        ?>
    </body>
</html>