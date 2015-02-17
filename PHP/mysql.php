<!DOCTYPE html>
<html>
    <body>
        <?php
            $servername = "mysql.serversfree.com";
            $username = "u253095539_testu";
            $password = "4edxz7yhbn";
            $db = "u253095539_test";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                echo "Connected successfully"; 
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
        ?>
    </body>
</html>