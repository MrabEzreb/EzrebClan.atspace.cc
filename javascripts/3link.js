var $, links, i;
$ = window.$;


function getLinks() {
	"use strict";
	var allLinks, correctLinks, i;
	correctLinks = [];
	allLinks = document.getElementsByTagName("goto");
	for (i = 0; i < allLinks.length; i++) {
    	correctLinks.push(allLinks[i]);
	}
	return allLinks;
}
function test() {
	"use strict";
	var p, links;
	p = document.getElementById("p");
	links = getLinks();
	p.innerHTML = links.valueOf();
}
function checkIfFile(link) {
	"use strict";
	var fileStr, htmlStr, slash;
	fileStr = link.substring(0, 5);
	htmlStr = link.substring(link.length - 5);
	slash = link.substring(link.length - 1);
	if (fileStr === "file:" && htmlStr !== ".html") {
		if(slash === "/") {
			return link + "index.html";
		} else {
			return link + "/index.html";
		}
	}
	return link;
}
function checkHttp(link) {
	"use strict";
	var fileStr, htmlStr, slash;
	fileStr = link.substring(0, 4);
	if (fileStr === "http") {
		return true;
	}
	return false;
}
function fillInLink(link) {
	"use strict";
	var text, linkTo, a, textN, subLink, thisLink, baseLink, homeLink, oldLink;
	text = link.innerHTML + " added";
	linkTo = link.getAttribute("link");
	link.innerHTML = "";
	a = document.createElement("a");
	textN = document.createTextNode(text);
	a.appendChild(textN);
	thisLink = document.URL;
	oldLink = thisLink;
	thisLink = thisLink.toLowerCase();
	subLink = oldLink.substring(thisLink.indexOf("ezrebclan"));
	baseLink = oldLink.substring(0, thisLink.indexOf("ezrebclan"));
	homeLink = baseLink + subLink.substring(0, subLink.indexOf("/"));
	if (checkHttp(link) === true) {
		a.setAttribute("href", link);
	} else {
		a.setAttribute("href", checkIfFile(homeLink + linkTo));
	}
	link.appendChild(a);
	return a.getAttribute("href");
}
function fillInLinkStr(link) {
	"use strict";
	var text, linkTo, a, textN, subLink, thisLink, baseLink, homeLink, oldLink;
	linkTo = link;
	a = document.createElement("a");
	thisLink = document.URL;
	oldLink = thisLink;
	thisLink = thisLink.toLowerCase();
	subLink = oldLink.substring(thisLink.indexOf("ezrebclan"));
	baseLink = oldLink.substring(0, thisLink.indexOf("ezrebclan"));
	homeLink = baseLink + subLink.substring(0, subLink.indexOf("/"));
	if (checkHttp(link) === true) {
		a.setAttribute("href", link);
	} else {
		a.setAttribute("href", checkIfFile(homeLink + linkTo));
	}
	return a.getAttribute("href");
}
links = getLinks();
if(links.length > 0) {
	for (i = 0; i < links.length; i++) {
	    fillInLink(links[i]);
	}
}