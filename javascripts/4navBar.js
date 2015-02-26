function closeChildren(htmlObject) {
    "use strict";
    var children, i;
    children = htmlObject.children;
    if (children.length === 0) {
        return;
    } else {
        for (i = 0; i < children.length; i = i + 1) {
            closeChildren(children[i]);
            if (children[i].getAttribute("hide") === "false") {children[i].style.display = "none"; }
        }
        return;
    }
}
function clicked(id) {
	"use strict";
    var drop, children, i;
    drop = document.getElementById(id).getElementsByClassName("dropdown-menu")[0];
    if (drop.style.display === "block") {
        drop.style.display = "none";
        for (i = 0; i < drop.children.length; i = i + 1) {
            closeChildren(drop.children[i]);
        }
    } else if (drop.style.display === "none") {
        drop.style.display = "block";
    } else {
        drop.style.display = "block";
    }
}
function loadNav(name, link) {
    "use strict";
    var list2, elem, link2;
    list2 = document.getElementById("navList");
    elem = document.createElement("li");
    link2 = document.createElement("a");
    link2.href = fillInLinkStr(link);
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
    list2.appendChild(elem);
    document.getElementById("demo").innerHTML = "completed";
}
function getNavElement(name, link) {
    "use strict";
    var elem, link2;
    elem = document.createElement("li");
    link2 = document.createElement("a");
    link2.setAttribute("role", "menuitem");
    link2.href = fillInLinkStr(link);
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
    elem.setAttribute("hide", "true");
    return elem;
}
function getNavDrop(name, navElements) {
    "use strict";
    var elem1, elem2, i, a, arrow;
    elem1 = document.createElement("li");
    elem1.setAttribute("class", "dropdown");
    elem1.setAttribute("id", name);
    a = document.createElement("a");
    a.href = "#";
    a.onclick = function () { clicked(name); };
    a.appendChild(document.createTextNode(name));
    arrow = document.createElement("span");
    arrow.className = "caret";
    a.appendChild(arrow);
    elem1.appendChild(a);
    elem2 = document.createElement("ul");
    elem2.className = "dropdown-menu";
    elem2.setAttribute("role", "navigation");
    elem2.setAttribute("id", "dropdown-menu");
    for (i = 0; i < navElements.length; i = i + 1) {
        navElements[i].setAttribute("role", "presentation");
        elem2.appendChild(navElements[i]);
    }
    elem1.appendChild(elem2);
    return elem1;
}
function getNavSlide(name, navElements) {
    "use strict";
    var elem1, elem2, i, a, arrow;
    elem1 = document.createElement("li");
    elem1.setAttribute("class", "dropdown-submenu");
    elem1.style.float = "center";
    elem1.style.display = "list-item";
    elem1.setAttribute("id", name);
    a = document.createElement("a");
    a.href = "#";
    a.onclick = function () { clicked(name); };
    a.appendChild(document.createTextNode(name));
    arrow = document.createTextNode(">");
    a.appendChild(arrow);
    elem1.appendChild(a);
    elem2 = document.createElement("ul");
    elem2.className = "dropdown-menu";
    elem2.style.left = "100%";
    elem2.style.top = "0%";
    elem2.setAttribute("role", "navigation");
    elem2.setAttribute("id", "dropdown-menu");
    for (i = 0; i < navElements.length; i = i + 1) {
        navElements[i].setAttribute("role", "presentation");
        elem2.appendChild(navElements[i]);
    }
    elem2.setAttribute("hide", "false");
    elem1.appendChild(elem2);
    return elem1;
}
function loadNavElem(navElement) {
    "use strict";
    var list;
    list = document.getElementById("navList");
    list.appendChild(navElement);
}
function loadFullNav(navArray, active) {
    "use strict";
    var i, list;
    list = document.getElementById("navList2");
    for (i = 0; i < navArray.length; i = i + 1) {
        if (i === active) {
            navArray[i].className = "active";
        }
        list.appendChild(navArray[i]);
    }
}
var account, mainNav, mainGamesDrop, ezrebPackNav, dndNav, ezrebClanNav, mainClanAdamSlide, mainClanDrop, mainClanMrabSlide, adamClan, mrabClan, profileBuilder;

ezrebClanNav = [getNavElement("Mrab Ezreb", "/EzrebClan/MrabEzreb"), getNavElement("AdamPlaysVideoGames", "/EzrebClan/AdamPlaysVideoGames"), getNavElement("Main Site", "/")];

ezrebPackNav = [getNavElement("EzrebPack", "/EzrebPack"), getNavElement("Download", "/EzrebPack/downloads.html"), getNavElement("Main Site", "/")];

dndNav = [getNavElement("Dnd Toolkit", "/Dnd"), getNavElement("Download", "/Dnd/downloads.html"), getNavElement("Main Site", "/")];

mainGamesDrop = [getNavElement("Dnd", "/Dnd"), getNavElement("EzrebPack", "/EzrebPack")];

mainClanAdamSlide = [getNavElement("Home", "/EzrebClan/AdamPlaysVideoGames"), getNavElement("Youtube", "https://www.youtube.com/channel/UCA757FqRtwZlBzVPZ8ffLfA")];

mainClanMrabSlide = [getNavElement("Home", "/EzrebClan/MrabEzreb"), getNavElement("YouTube", "https://youtube.com/c/MrabEzreb")];

mainClanDrop = [getNavSlide("Mrab Ezreb", mainClanMrabSlide), getNavSlide("AdamPlaysVideoGames", mainClanAdamSlide)];

adamClan = [getNavElement("Home", "/EzrebClan/AdamPlaysVideoGames"), getNavElement("YouTube", "https://www.youtube.com/channel/UCA757FqRtwZlBzVPZ8ffLfA"), getNavElement("Main Site", "/")];

mrabClan = [getNavElement("Home", "/EzrebClan/MrabEzreb"), getNavElement("YouTube", "https://www.youtube.com/c/MrabEzreb"), getNavElement("Main Site", "/")];

profileBuilder = [getNavElement("Main Site", "/"), getNavElement("Save", "save.php")];

account = [getNavElement("Main Site", "/"), getNavElement("Login", "/SQL/login.html"), getNavElement("Signup", "/SQL/signup.html")];

mainNav = [getNavElement("Primary", "/"), getNavElement("Social", "/social.html"), getNavElement("Minecraft Minimap", "/map_rdir.html"), getNavDrop("Games", mainGamesDrop), getNavDrop("EzrebClan", mainClanDrop)];
function getArray(navObject) {
    "use strict";
    var name, active;
    name = navObject.getAttribute("array");
    active = navObject.getAttribute("active");
    if (name === "main") {
        mainNav[active].className = "active";
        return mainNav;
    } else if (name === "ezrebpack") {
        ezrebPackNav[active].className = "active";
        return ezrebPackNav;
    } else if (name === "dnd") {
        dndNav[active].className = "active";
        return dndNav;
    } else if (name === "ezrebclan") {
        ezrebClanNav[active].className = "active";
        return ezrebClanNav;
    } else if (name === "AdamPlaysVideoGames") {
        adamClan[active].className = "active";
        return adamClan;
    } else if (name === "MrabEzreb") {
        mrabClan[active].className = "active";
        return mrabClan;
    } else if (name === "profileBuilder") {
        profileBuilder[active].className = "active";
        return profileBuilder;
    } else if (name === "account") {
    	account[active].className = "active";
    	return account;
    }
}
function insertToElem() {
    "use strict";
    var i, nav, row, cols, list, elem, navArray;
    nav = document.getElementsByTagName("nav")[0];
    navArray = getArray(nav);
    row = document.createElement("div");
    row.className = "row";
    cols = document.createElement("div");
    cols.className = "col-sm-12";
    list = document.createElement("ul");
    list.id = "navList2";
    list.className = "nav nav-pills";
    list.setAttribute("role", "tablist");
    cols.appendChild(list);
    row.appendChild(cols);
    nav.appendChild(row);
    loadFullNav(navArray, nav.getAttribute("active"));
}
function run() {
    "use strict";
    insertToElem();
}
run();