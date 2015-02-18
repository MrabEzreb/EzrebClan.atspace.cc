<!DOCTYPE html>
<html>
    <body>
        <?php
            $Name = $_POST["name"];
            $Email = $_POST["email"];
            $User = $_POST["username"];
            $Pass = $_POST["password"];
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
            if ($number > 0) {
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
                    $hashcode = uniqid('ezreb_', true);
                    $sql = "INSERT INTO Profiles
                        VALUES ('$Name', '$Email', '$User', '$Pass', false, '$hashcode')";
                    $conn->exec($sql);
                }
            }
            $conn = null;
        ?>
    </body>
</html>