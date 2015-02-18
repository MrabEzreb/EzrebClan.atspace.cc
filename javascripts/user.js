function generateUser() {
    "use strict";
    var user, pic, frame;
    window.sessionStorage.setItem("profileImSrc", "http://ochumanesociety.com/clients/3697/images/kittens.jpg");
    user = document.getElementsByTagName("user");
    pic = window.sessionStorage.getItem("profileImSrc");
    frame = document.createElement("img");
    frame.src = pic;
    user[0].appendChild(frame);
}
function addTo() {
    "use strict";
    generateUser();
}
window.onload = addTo;