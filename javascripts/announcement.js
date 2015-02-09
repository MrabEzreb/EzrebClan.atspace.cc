function setAnnouncement() {
    "use strict";
    document.getElementById("announcementh").innerHTML = "Test Announcement: From scheyool!";
    document.getElementById("announcementh").style.display = "in-line";
    document.getElementById("announcementh").style.backgroundColor = "green";
    document.getElementById("announcementh").style.color = "white";
    document.getElementById("announcementp").innerHTML = "Test Announcement: Hai Everybody!";
    document.getElementById("announcementp").style.display = "in-line";
    document.getElementById("announcementp").style.backgroundColor = "green";
    document.getElementById("announcementp").style.color = "white";
    document.getElementById("announcement").style.backgroundColor = "red";
}
window.onload = setAnnouncement;