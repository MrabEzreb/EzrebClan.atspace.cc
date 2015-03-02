<!DOCTYPE html>
<html>
    <body>
        <?php
            $fhName = "../BTS/announcementh.txt";
            $fpName = "../BTS/announcementp.txt";
            $JSName = "../javascripts/announcement.js";
            $OldJS = "function setAnnouncement() {
    \"use strict\";
    document.getElementById(\"announcementh\").innerHTML = h1;

    document.getElementById(\"announcementh\").style.display = \"in-line\";
    document.getElementById(\"announcementh\").style.backgroundColor = \"green\";
    document.getElementById(\"announcementh\").style.color = \"white\";
    document.getElementById(\"announcementp\").innerHTML = p1;
    document.getElementById(\"announcementp\").style.display = \"in-line\";
    document.getElementById(\"announcementp\").style.backgroundColor = \"green\";
    document.getElementById(\"announcementp\").style.color = \"white\";
    document.getElementById(\"announcement\").style.backgroundColor = \"red\";
    }
    function loadAnnouncement() {
    \"use strict\";
    var announce, row, cols, h, p;
    announce = document.getElementsByTagName(\"announcement\");
    row = document.createElement(\"div\");
    cols = document.createElement(\"div\");
    row.className = \"row\";
    cols.className = \"col-sm-12\";
    h = document.createElement(\"h1\");
    p = document.createElement(\"p\");
    h.id = \"announcementh\";
    p.id = \"announcementp\";
    cols.appendChild(h);
    cols.appendChild(p);
    row.appendChild(cols);
    announce[0].style = \"background-color: red; text-align: center;\";
    announce[0].appendChild(row);
    setAnnouncement();
    }
    window.onload = loadAnnouncement;";
           $fhFile = fopen($fhName, "r");
           $fpFile = fopen($fpName, "r");
           $JSH = "var h1 = \"".fread($fhFile, filesize($fhName)-1)."\";\n";
           $JSP = "var p1 = \"".fread($fpFile, filesize($fpName)-1)."\";\n";
           $JSFinal = $JSH.$JSP.$OldJS;
           fclose($fhFile);
           fclose($fpFile);
           $JSFile = fopen($JSName, "w");
           fwrite($JSFile, $JSFinal);
           fflush($JSFile);
           fclose($JSFile);
           echo "Done";
           echo "Announcement set to: ";
           echo $JSFinal;
        ?>
    </body>
</html>