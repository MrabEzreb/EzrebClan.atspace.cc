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
    window.sessionStorage.setItem("HomeLink", "/EzrebClan/adam.html");
    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
}
function openDropdown() {
    "use strict";
    var userButton, userPanel, body, text, link;
    userButton = document.getElementsByTagName("button")[0];
    userPanel = document.createElement("ul");
    userPanel.className = "dropdown-menu userPanel";
    text = document.createElement("li");
    link = document.createElement("a");
    link.appendChild(document.createTextNode(window.sessionStorage.getItem("username")));
    link.setAttribute("role", "menuitem");
    link.href = window.sessionStorage.getItem("HomeLink");
    text.appendChild(link);
    link = document.createElement("a");
    link.appendChild(document.createTextNode("Youtube"));
    link.setAttribute("role", "menuitem");
    link.href = window.sessionStorage.getItem("YTLink");
    text.appendChild(link);
    text.style.textAlign = "center";
    userPanel.appendChild(text);
    body = document.getElementsByTagName("nav")[0];
    userPanel.style.position = "relative";
    userPanel.style.right = "100%";
    userPanel.style.left = "0%";
    userPanel.style.height = "120px";
    userPanel.style.width = "auto";
    userPanel.style.display = "block";
    userPanel.style.zIndex = "6";
    userPanel.style.backgroundColor = "white";
    userButton.appendChild(userPanel);
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