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
function testingData() {
    "use strict";
    window.sessionStorage.setItem("profileImSrc", "http://ochumanesociety.com/clients/3697/images/kittens.jpg");
    window.sessionStorage.setItem("username", "MrabEzreb");
}
function openDropdown() {
    "use strict";
    var userButton, userPanel, body, text;
    userButton = document.getElementsByTagName("button")[0];
    userPanel = document.createElement("div");
    userPanel.className = "userPanel";
    text = document.createElement("p");
    text.appendChild(document.createTextNode("test"));
    text.style.textAlign = "center";
    userPanel.appendChild(text);
    userPanel.parentElement = userButton;
    body = document.getElementsByTagName("nav")[0];
    body.appendChild(userPanel);
    userPanel.style.float = "right";
    userPanel.style.height = "120px";
    userPanel.style.width = "175px";
}
function closeDropdown() {
    "use strict";
    var userPanel, i;
    userPanel = document.getElementsByClassName("userPanel");
    for (i = 0; i < userPanel.length; i = i + 1) {
        userPanel[i].style.display = "none";
    }
}
function toggleDrop() {
    "use strict";
    var button;
    button = document.getElementById("user");
    button.onpaste();
    if (button.onpaste === closeDropdown) {
        button.onpaste = openDropdown;
    } else {
        button.onpaste = closeDropdown;
    }
}
function generateButton() {
    "use strict";
    var button, username, text, image, nav, p;
    testingData();
    username = window.sessionStorage.getItem("username");
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.onclick = toggleDrop;
    button.onpaste = openDropdown;
    button.id = "user";
    text = document.createTextNode("Welcome, " + username);
    image = document.createElement("img");
    image.src = window.sessionStorage.getItem("profileImSrc");
    nav = document.getElementsByTagName("nav")[0].getElementsByClassName("row")[0].getElementsByClassName("col-sm-12")[0].getElementsByClassName("nav nav-pills")[0];
    image.style.height = "40px";
    image.className = "pull-left";
    button.style.height = "40px";
    button.style.width = "175px";
    p = document.createElement("p");
    p.appendChild(text);
    p.style.verticalAlign = "middle";
    p.style.textAlign = "center";
    p.style.fontSize = "15px";
    p.style.lineHeight = "18px";
    p.style.wordWrap = "normal";
    button.appendChild(image);
    button.appendChild(p);
    button.className = "pull-right";
    nav.appendChild(button);
}
window.onload = generateButton;