<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            function run() {
                window.alert("test");
                window.localStorage.setItem("profileImSrc", "image");
                window.localStorage.setItem("username", "username");
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
            $Store = $_POST["store"];
            $OriginalURL = $_POST["url"];
            // Alpha Server
            $servername2 = "mysql.freehostingnoads.net";
            $servername = "localhost";
            $username = "root";
            $password = "4edxz7yhbn";
            $db = "alphatesting1";
//            // Beta Server
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
                $conn = new PDO("mysql:host=$servername2;dbname=$db", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
            $stmt = $conn->prepare("SELECT name, email, hash, image, username FROM profiles WHERE Username='$User' AND Password='$Pass';"); 
            $stmt->execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll();
            $number = count($result);
            if ($number < 1) {
                echo "Incorrect Details, please go back.";
                $scripted = <<<EOD
<script>
window.sessionStorage.setItem("incorrect", "true");
</script>
<meta http-equiv="refresh" content="0; url=$OriginalURL">
EOD;
                echo $scripted;
            } else {
                $chosen = $result[0];
                echo "Your name is ".$result[0]['name']." and your email is ".$result[0]['email'];
                echo "<br>Your hashcode is ".$result[0]['hash'];
                echo "<br>You can now return to the main site";
                $image = $chosen['image'];
                $user = $chosen['username'];
                if ($Store == true) {
                    $funcrun = "<script>\n window.localStorage.setItem(\"profileImSrc\", \"${image}\");\n window.localStorage.setItem(\"username\", \"${user}\");\n window.localStorage.setItem(\"HomeLink\", \"/Profiles/\" + window.localStorage.getItem(\"username\"));\n window.localStorage.setItem(\"YTLink\", \"https://youtube.com/c/MrabEzreb\");\n</script>\n";
                } else {
                    $funcrun = "<script>\n window.sessionStorage.setItem(\"profileImSrc\", \"${image}\");\n window.sessionStorage.setItem(\"username\", \"${user}\");\n window.sessionStorage.setItem(\"HomeLink\", \"/Profiles/\" + window.sessionStorage.getItem(\"username\"));\n window.sessionStorage.setItem(\"YTLink\", \"https://youtube.com/c/MrabEzreb\");\n</script>\n";
                }
                echo $funcrun;
                if ($OriginalURL == null) {
                    echo "<meta http-equiv=\"refresh\" content=\"0; url=../../\">";
                } else {
                    echo "<meta http-equiv=\"refresh\" content=\"0; url=../../\">";
                }
            }
            $conn = null;
        ?>
        
    </body>
</html>