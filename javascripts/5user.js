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
    var userButton, userPanel, body, text, link, currentURL, startOfURLIndex, text2, text3, link2, link3;
    currentURL = window.document.URL;
    startOfURLIndex = currentURL.indexOf("/");
    userButton = document.getElementsByTagName("button")[0];
    userPanel = document.createElement("ul");
    userPanel.className = "dropdown-menu userPanel";
    userPanel.style.textAlign = "center";
    text = document.createElement("li");
    link = document.createElement("a");
    link.style.clear = "none";
    link.style.position = "relative";
    text.style.textAlign = "center";
    text.style.clear = "none";
    if (window.sessionStorage.getItem("YTLink") === null) {
    	link.appendChild(document.createTextNode("Signup"));
	    link.setAttribute("role", "menuitem");
	    link.href = fillInLinkStr("/Account/Signup");
    } else {
	    link.appendChild(document.createTextNode(window.sessionStorage.getItem("username")));
	    link.setAttribute("role", "menuitem");
	    link.href = fillInLinkStr(window.sessionStorage.getItem("HomeLink"));
	}
    text.appendChild(link);
    userPanel.appendChild(text);
    text2 = document.createElement("li");
    link2 = document.createElement("a");
    link2.style.clear = "none";
    if (window.sessionStorage.getItem("YTLink") === null) {
    	link2.appendChild(document.createTextNode("Login"));
	    link2.setAttribute("role", "menuitem");
	    link2.href = fillInLinkStr("/Account/Login");
    } else {
	    link2.appendChild(document.createTextNode("Youtube"));
	    link2.setAttribute("role", "menuitem");
	    link2.href = window.sessionStorage.getItem("YTLink");
	}
    text2.appendChild(link2);
    userPanel.appendChild(text2);
    if (window.sessionStorage.getItem("YTLink") !== null) {
        var text4 = document.createElement("li");
        var link4 = document.createElement("a");
        text4.style.height = "26px";
        link4.style.textAlign = "center";
        link4.style.clear = "none";
        link4.appendChild(document.createTextNode("Account Settings"));
        link4.setAttribute("role", "menuitem");
        link4.href = fillInLinkStr("/Account/Settings");
        text4.appendChild(link4);
        userPanel.appendChild(text4);
        text3 = document.createElement("li");
        link3 = document.createElement("a");
        text3.style.height = "26px";
        link3.style.textAlign = "center";
        link3.style.clear = "none";
        link3.appendChild(document.createTextNode("Signout"));
        link3.setAttribute("role", "menuitem");
        link3.href = fillInLinkStr("/Account/Signout");
        text3.appendChild(link3);
        userPanel.appendChild(text3);
    }
    body = document.getElementsByTagName("nav")[0];
    userPanel.style.position = "relative";
    userPanel.style.height = "auto";
    userPanel.style.float = "none";
    userPanel.style.right = "100%";
    userPanel.style.left = "0%";
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
	    window.sessionStorage.setItem("HomeLink", "/Profiles/" + window.localStorage.getItem("username"));
	    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
  	} else if(window.sessionStorage.getItem("username") === null) {
	    window.sessionStorage.setItem("profileImSrc", "");
	    window.sessionStorage.setItem("username", "Guest");
	    window.sessionStorage.setItem("HomeLink", "/");
	} else if(window.sessionStorage.getItem("username") === "Guest") {
	    window.sessionStorage.setItem("profileImSrc", "");
	    window.sessionStorage.setItem("username", "Guest");
	    window.sessionStorage.setItem("HomeLink", "/");
	} else {
	    window.sessionStorage.setItem("HomeLink", "/Profiles/" + window.sessionStorage.getItem("username"));
	    window.sessionStorage.setItem("YTLink", "https://youtube.com/c/MrabEzreb");
    }       
}
function generateButton() {
    "use strict";
    var button, username, text, text2, br, image, navPills, p, nav, row, colsm12;
    //testingData();
    grabData();
    username = window.sessionStorage.getItem("username");
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.onclick = toggleDrop;
    button.onpaste = openDropdown;
    button.id = "user";
    button.setAttribute("data-toggle", "dropdown");
    text = document.createTextNode("Welcome, ");
    br = document.createElement("br");
    text2 = document.createTextNode(username);
    image = document.createElement("img");
    image.src = window.sessionStorage.getItem("profileImSrc");
    nav = document.getElementsByTagName("nav")[0];
    row = nav.getElementsByClassName("row")[0];
    colsm12 = row.getElementsByClassName("col-sm-12")[0];
    navPills = colsm12.getElementsByClassName("nav nav-pills")[0];
    image.style.height = "40px";
    image.style.left = "0px";
    image.style.paddingRight = "20px";
    button.style.height = "40px";
    p = document.createElement("p");
    p.appendChild(text);
    p.appendChild(br);
    p.appendChild(text2);
    p.style.verticalAlign = "middle";
    p.style.textAlign = "center";
    p.style.fontSize = "15px";
    p.style.lineHeight = "18px";
    p.style.float = "right";
    button.appendChild(image);
    button.appendChild(p);
    button.style.float = "right";
    button.style.right = "0px";
    button.style.width = "auto";
    navPills.appendChild(button);
}
generateButton();