<?php
$target_dir = "../../Profiles/Guest/data/";
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
?>