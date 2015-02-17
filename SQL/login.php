<!DOCTYPE html>
<html>
    <body>
        <?php
            $User = $_POST["username"];
            $Pass = $_POST["password"];
            $servername = "mysql.serversfree.com";
            $username = "u253095539_testu";
            $password = "4edxz7yhbn";
            $db = "u253095539_test";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
            $stmt = $conn->prepare("SELECT name, email FROM SignupFake WHERE Username='$User' AND Password='$Pass';"); 
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll();
            echo "Your name is ".$result[0]['name']." and your email is ".$result[0]['email'];
            $conn = null;
        ?>
    </body>
</html>