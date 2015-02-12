<!DOCTYPE html>
<html>
    <body>
        <?php
        $myFile = fopen("../BTS/announcementh.txt", "w");
        fwrite($myFile, $_POST["h"]);
        fwrite($myFile, "\n");
        fclose($myFile);
        $myFile2 = fopen("../BTS/announcementp.txt", "w");
        fwrite($myFile2, $_POST["p"]);
        fwrite($myFile2, "\n");
        fclose($myFile2);
         ?>
        <a href="../PHP/announcement.php">Finish</a>
    </body>
</html>