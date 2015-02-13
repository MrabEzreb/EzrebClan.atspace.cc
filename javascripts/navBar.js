function clicked(id) {
	"use strict";
    var drop = document.getElementById(id).getElementsByClassName("dropdown-menu")[0];
    if (drop.style.display === "block") {
        drop.style.display = "none";
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
    link2.href = link;
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
    link2.href = link;
    link2.appendChild(document.createTextNode(name));
    elem.appendChild(link2);
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
var mainNav, mainGamesDrop;

mainGamesDrop = [getNavElement("Dnd", "Dnd"), getNavElement("EzrebPack", "EzrebPack")];

mainNav = [getNavElement("Primary", ".."), getNavElement("Social", "social.html"), getNavElement("Minecraft Minimap", "map.html#map"), getNavDrop("Games", mainGamesDrop)];
function getArray(navObject) {
    "use strict";
    var name, active;
    name = navObject.getAttribute("array");
    active = navObject.getAttribute("active");
    if (name === "main") {
        mainNav[active].className = "active";
        return mainNav;
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
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    run();
}, false);