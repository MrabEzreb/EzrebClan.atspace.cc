<?php
$refMain = <<<EOD
<!DOCTYPE html>
<html>
    <head><script src="../../javascripts/scriptLoader.js"></script></head>
    <body>
        <announcement></announcement>
        <nav array="data" active=0></nav>
        <h1>Welcome to the refrence page! :D</h1>
        <h2>Here, you will find everything that you can do with Ezreb Clan Hosted Data!</h2>
        <ul>
            <li><a href=.?data=refrence&amp;page=time>Time</a></li>
        </ul>
    </body>
</html>
EOD;
$refTime = <<<EOD
<!DOCTYPE html>
<html>
    <head><script src="../../javascripts/scriptLoader.js"></script></head>
    <body>
        <announcement></announcement>
        <nav array="data" active=0></nav>
        <h2>You can do a lot of things with the time data.</h2>
        <ul>
            <li>24hour
                <ul>Possible values:
                    <li><a href=.?data=time&amp;24hour=true>true</a></li>
                    <li><a href=.?data=time&amp;24hour=false>false</a></li>
                </ul>
            </li>
            <li>showMilli
                <ul>Possible values:
                    <li><a href=.?data=time&amp;showMilli=true>true</a></li>
                    <li><a href=.?data=time&amp;showMilli=false>false</a></li>
                </ul>
            </li>
        </ul>
    </body>
</html>
EOD;
$time = <<<EOD
<?php

?>
EOD;
if (array_key_exists("data", $_GET)) {
    $datatype = $_GET["data"];
    switch ($datatype) {
        case "refrence":
            if (array_key_exists("page", $_GET)) {
                switch ($_GET["page"]) {
                    case "time":
                        echo $refTime;
                        break;
                }
            } else {
                echo $refMain;
            }
            break;
        case "blue":
            echo "Your favorite color is blue!";
            break;
        case "green":
            echo "Your favorite color is green!";
            break;
        default:
            echo "That page does not exist";
    }
} else {
    echo "That page does not exist";
}
?>