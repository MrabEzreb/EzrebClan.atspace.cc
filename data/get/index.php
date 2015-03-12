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
    <head><script src="../../javascripts/scriptLoader.js"></script><script src="hoverIframe.js"></script><link href="hoverIframe.css" rel="stylesheet"/></head>
    <body>
        <announcement></announcement>
        <nav array="data" active=0></nav>
        <h2>You can do a lot of things with the time data.</h2>
        <ul class="arguments">
            <iframe class="hidden" id="preview"></iframe>
            <li>24hour
                <ul>Possible values:
                    <li><a class="hoverable" href=.?data=time&amp;24hour=true>true</a></li>
                    <li><a class="hoverable" href=.?data=time&amp;24hour=false>false</a></li>
                </ul>
            </li>
            <li>showMilli (bugged atm)
                <ul>Possible values:
                    <li><a class="hoverable" href=.?data=time&amp;showMilli=true>true</a></li>
                    <li><a class="hoverable" href=.?data=time&amp;showMilli=false>false</a></li>
                </ul>
            </li>
            <li>leadingZero
                <ul>Possible values:
                    <li><a class="hoverable" href=.?data=time&amp;leadingZero=true>true</a></li>
                    <li><a class="hoverable" href=.?data=time&amp;leadingZero=false>false</a></li>
                </ul>
            </li>
            <li>AMPM
                <ul>Possible values:
                    <li><a class="hoverable" href=.?data=time&amp;AMPM=uppercase>uppercase</a></li>
                    <li><a class="hoverable" href=.?data=time&amp;AMPM=lowercase>lowercase</a></li>
                    <li><a class="hoverable" href=.?data=time&amp;AMPM=off>off</a> (When 24hour = true, AMPM is always off)</li>
                </ul>
            </li>
        </ul>
    </body>
</html>
EOD;
function timeData() {
    $hourSymbol = "g";
    $millis = "";
    $Ampm = "";
    if (array_key_exists("leadingZero", $_GET) && $_GET["leadingZero"] == true) {
        $hourSymbol = "h";
    }
    if (array_key_exists("showMilli", $_GET) && $_GET["showMilli"] == "true") {
        $millis = ":u";
    }
    if (array_key_exists("AMPM", $_GET)) {
        switch ($_GET["AMPM"]) {
            case "uppercase":
                $Ampm = " A";
                break;
            case "lowercase":
                $Ampm = " a";
                break;
            case "off":
                $Ampm = "";
                break;
            default:
                $Ampm = "";
                break;
        }
    } else {$Ampm = "";}
    if (array_key_exists("24hour", $_GET)) {
        switch ($_GET["24hour"]) {
            case "false":
                date_default_timezone_set('America/New_York');
                echo date(strtolower($hourSymbol) . ":i:s" . $millis . $Ampm);
                break;
            case "true":
                date_default_timezone_set('America/New_York');
                echo date(strtoupper($hourSymbol) . ":i:s" . $millis);
                break;
        }
    } else {
        date_default_timezone_set('America/New_York');
        echo date($hourSymbol . ":i:s" . $millis . $Ampm);
    }
}
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
        case "time":
            //echo "Your favorite color is blue!";
            timeData();
            break;
        case "green":
            echo "Your favorite color is green!";
            break;
        default:
            echo "That page does not exist";
    }
} else {
    echo "<meta http-equiv=\"refresh\" content=\"0; url=.?data=refrence\">";
}
?>