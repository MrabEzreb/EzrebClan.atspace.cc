var h1 = "Test1";
var p1 = "Test2";
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
}
function loadAnnouncement() {
    "use strict";
    var announce, announcement, row, cols, h, p;
    announce = document.getElementsByTagName("announcement");
    announcement = document.createElement("div");
    announce[0].id = "announcement";
    announcement.className = "Announcement";
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
    announce[0].setAttribute("style", "background-color: \"red\"; text-align: center;");
    announce[0].style.backgroundColor = "rgb(255, 0, 0)";
    announcement.appendChild(row);
    announce[0].appendChild(announcement);
    setAnnouncement();
}
loadAnnouncement();