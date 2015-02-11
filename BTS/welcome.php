<!DOCTYPE html>
<html>
    <body>
    
        Welcome <?php echo $_POST["name"]; ?><br>
        Your email address is: <?php echo $_POST["email"]; ?>
        $myFile = fopen("formData.txt", "a");
        fwrite($myFile, $_POST["name"]);
        fwrite($myFile, "\n");
        fwrite($myFile, $_POST["email"]);
        fwrite($myFile, "\n");
    
    </body>
</html>