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
window.onload = setAnnouncement;
var h1 = "";
var p1 = "";