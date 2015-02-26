var $, thisURL;
$ = window.$;
thisURL = document.URL;
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
    window.sessionStorage.setItem("username", "AdamPlaysVideoGames");
    window.sessionStorage.setItem("HomeLink", "/EzrebClan/adam.html");
    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
}
function openDropdown() {
    "use strict";
    var userButton, userPanel, body, text, link, currentURL, startOfURLIndex;
    currentURL = window.document.URL;
    startOfURLIndex = currentURL.indexOf("/");
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
    userPanel.style.width = "inherit";
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
    var button, drop;
    button = document.getElementById("user");
    button.onpaste();
    if (button.onpaste === closeDropdown) {
        button.onpaste = openDropdown;
    } else {
        button.onpaste = closeDropdown;
    }
}
function grabData() {
	"use strict";
	if(window.localStorage.getItem("username") !== null) {
	    window.sessionStorage.setItem("profileImSrc", window.localStorage.getItem("profileImSrc"));
	    window.sessionStorage.setItem("username", window.localStorage.getItem("username"));
	    window.sessionStorage.setItem("HomeLink", "/EzrebClan/AdamPlaysVideoGames");
	    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
  	} else if(window.sessionStorage.getItem("username") === null) {
	    window.sessionStorage.setItem("profileImSrc", "");
	    window.sessionStorage.setItem("username", "Guest");
	    window.sessionStorage.setItem("HomeLink", "/");
	    window.sessionStorage.setItem("YTLink", "https://youtube.com");
	}
}
function generateButton() {
    "use strict";
    var button, username, text, image, nav, p;
    //testingData();
    grabData();
    username = window.sessionStorage.getItem("username");
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.onclick = toggleDrop;
    button.onpaste = openDropdown;
    button.id = "user";
    button.style.width = "auto";
    button.setAttribute("data-toggle", "dropdown");
    text = document.createTextNode("Welcome, \r" + username);
    image = document.createElement("img");
    image.src = window.sessionStorage.getItem("profileImSrc");
    nav = document.getElementsByTagName("nav")[0].getElementsByClassName("row")[0].getElementsByClassName("col-sm-12")[0].getElementsByClassName("nav nav-pills")[0];
    image.style.height = "40px";
    image.className = "pull-left";
    button.style.height = "40px";
    p = document.createElement("p");
    p.appendChild(text);
    p.style.verticalAlign = "middle";
    p.style.textAlign = "center";
    p.style.fontSize = "15px";
    p.style.lineHeight = "18px";
    button.appendChild(image);
    button.appendChild(p);
    button.style.float = "right";
    nav.appendChild(button);
}
generateButton();