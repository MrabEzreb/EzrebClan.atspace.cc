var h1 = "Test";
var p1 = "Notice: If stuff doesn't show up, refresh the page.";

function setAnnouncement() {
    "use strict";
    document.getElementById("announcementh").innerHTML = h1;

    document.getElementById("announcementh").style.display = "in-line";
    document.getElementById("announcementh").style.backgroundColor = "green";
    document.getElementById("announcementh").style.color = "white";
    document.getElementById("announcementp").innerHTML = p1;
    document.getElementById("announcementp").style.display = "in-line";
    document.getElementById("announcementp").style.backgroundColor = "green";
    document.getElementById("announcementp").style.color = "white";
    document.getElementById("announcement").style.backgroundColor = "red";
    document.getElementById("announcement").style.textAlign = "center";
    document.getElementById("announcement").style.display = "block";
}
function loadAnnouncement() {
    "use strict";
    var announce, row, cols, h, p;
    announce = document.getElementsByTagName("announcement");
    announce[0].id = "announcement";
    row = document.createElement("div");
    cols = document.createElement("div");
    row.className = "row";
    cols.className = "col-sm-12";
    h = document.createElement("h1");
    p = document.createElement("p");
    h.id = "announcementh";
    p.id = "announcementp";
    cols.appendChild(h);
    cols.appendChild(p);
    row.appendChild(cols);
    announce[0].style = "background-color: red; text-align: center;";
    announce[0].appendChild(row);
    setAnnouncement();
}
loadAnnouncement();