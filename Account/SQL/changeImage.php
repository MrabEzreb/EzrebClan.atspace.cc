<!DOCTYPE html>
<html>
    <body>
        <?php
            $Image = $_POST["image"];
            $User = $_POST["user"];
            // Alpha Server
            $servername = "localhost";
            $username = "root";
            $password = "4edxz7yhbn";
            $db = "alphatesting1";
            // Beta Server
//            $servername = "mysql14.000webhost.com";
//            $username = "a9340268_test";
//            $password = "4edxz7yhbn";
//            $db = "a9340268_test";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
            $hashcode = uniqid('ezreb_', true);
            $sql = "UPDATE Profiles SET image='$Image' WHERE username='$User'";
            $conn->exec($sql);
            echo "<script>if (window.localStorage.getItem(\"username\") !== null) { window.localStorage.setItem(\"profileImSrc\", \"$Image\"); } else if((window.sessionStorage.getItem(\"username\") !== \"Guest\") { window.sessionStorage.setItem(\"profileImSrc\", \"$Image\"); }";
            echo "<meta http-equiv=\"refresh\" content=\"0; url=../Settings\">";
            $conn = null;
        ?>
    </body>
</html>