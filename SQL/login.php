<!DOCTYPE html>
<html>
    <body>
        <?php
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
            $stmt = $conn->prepare("SELECT name, email, hash FROM Profiles WHERE Username='$User' AND Password='$Pass';"); 
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll();
            echo "Your name is ".$result[0]['name']." and your email is ".$result[0]['email'];
            echo "<br>Your hashcode is ".$result[0]['hash'];
            $conn = null;
        ?>
    </body>
</html>