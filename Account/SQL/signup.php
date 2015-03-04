<!DOCTYPE html>
<html>
    <body>
        <?php
            $Name = $_POST["name"];
            $Email = $_POST["email"];
            $User = $_POST["username"];
            $Pass = $_POST["password"];
            // Alpha Server
//            $servername = "localhost";
//            $username = "root";
//            $password = "4edxz7yhbn";
//            $db = "alphatesting1";
            // Beta Server
            $servername = "mysql14.000webhost.com";
            $username = "a9340268_test";
            $password = "4edxz7yhbn";
            $db = "a9340268_test";
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
            echo "<meta http-equiv=\"refresh\" content=\"0; url=../../\">";
            $conn = null;
        ?>
    </body>
</html>