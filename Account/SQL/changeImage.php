<!DOCTYPE html>
<html>
    <head>
        <script>
        function setImage(image) {
            if (window.localStorage.getItem("username") !== null) {
                window.localStorage.setItem("profileImSrc", image);
                window.sessionStorage.setItem("profileImSrc", image);
            } else if (window.sessionStorage.getItem("username") !== "Guest") {
                window.sessionStorage.setItem("profileImSrc", image);
            }
        }
        </script>
    </head>
    <body>
        <?php
            $Image = $_POST["image"];
            $User = $_POST["user"];
            $target_dir = "../../Profiles/$User/data/";
            $target_file = $target_dir . "profileImage";
            $uploadOk = 1;
            // Check if image file is a actual image or fake image
            if(isset($_POST["submit"])) {
                $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
                if($check !== false) {
                    echo "File is an image - " . $check["mime"] . ".";
                    $uploadOk = 1;
                } else {
                    echo "File is not an image.";
                    $uploadOk = 0;
                }
            }
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file . ".png")) {
                echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
            $Image = "../../Profiles/$User/data/profileImage.png";
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
            // Grendle Server
            $servername = "mysql.grendelhosting.com";
            $username = "u616060026_live";
            $password = "4edxz7yhbn";
            $db = "u616060026_live";
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
            echo "test <br>";
            $script = <<<EOD
<script>
setImage("$Image");
</script>
<br>
EOD;
            echo $script;
            echo "<meta http-equiv=\"refresh\" content=\"0; url=../Settings\">";
            echo "test";
            $conn = null;
        ?>
    </body>
</html>