function hover() {
	"use strict";
	var selected, iframe, src;
	selected = document.querySelectorAll("li > a:hover")[0];
	iframe = document.getElementById("preview");
	src = selected.getAttribute("href");
	iframe.setAttribute("src", src);
	iframe.className = "displayed";
}
function unhover() {
	"use strict";
	var iframe, src;
	iframe = document.getElementById("preview");
	src = "";
	iframe.setAttribute("src", src);
	iframe.className = "hidden";
}
window.onload = function() {
	"use strict";
	var ul1, i1, li1, i2, a1, iframe1;
	ul1 = document.getElementsByTagName("ul");
	for (i1 = 0; i1 < ul1.length; i1++) {
		li1 = ul1[i1];
		a1 = li1.getElementsByClassName("hoverable");
		for (i2 = 0; i2 < a1.length; i2++) {
			a1[i2].setAttribute("onmouseover", "hover()");
			a1[i2].setAttribute("onmouseout", "unhover()");
		}
	}
};