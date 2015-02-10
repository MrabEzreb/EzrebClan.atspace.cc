function setAnnouncement() {
    "use strict";
    document.getElementById("announcement").innerHTML = "Test Announcement";
    document.getElementById("announcement").style.display = "in-line";
    document.getElementById("announcement").style.fontSize = "25px";
    document.getElementById("announcement").style.backgroundColor = "green";
    document.getElementById("announcement").style.color = "white";
}
window.onload = setAnnouncement;