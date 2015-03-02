<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            function run() {
                window.alert("test");
                window.localStorage.setItem("profileImSrc", "image");
                window.localStorage.setItem("username", "username"});
                window.localStorage.setItem("HomeLink", "/EzrebClan/AdamPlaysVideoGames");
                window.localStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb);
            }
            function alerter () {
                window.alert("test");
            }
          </script>
    </head>
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
            $stmt = $conn->prepare("SELECT name, email, hash, image, username FROM Profiles WHERE Username='$User' AND Password='$Pass';"); 
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll();
            $chosen = $result[0];
            echo "Your name is ".$result[0]['name']." and your email is ".$result[0]['email'];
            echo "<br>Your hashcode is ".$result[0]['hash'];
            echo "<br>You can now return to the main site";
            $image = $chosen['image'];
            $user = $chosen['username'];
            $funcrun = "<script>\n window.localStorage.setItem(\"profileImSrc\", \"${image}\");\n window.localStorage.setItem(\"username\", \"${user}\");\n window.localStorage.setItem(\"HomeLink\", \"/EzrebClan/AdamPlaysVideoGames\");\n window.localStorage.setItem(\"YTLink\", \"https://youtube.com/c/MrabEzreb\");\n</script>\n";
            echo $funcrun;
            echo "<meta http-equiv=\"refresh\" content=\"0; url=../../\">";
            $conn = null;
        ?>
        
    </body>
</html>