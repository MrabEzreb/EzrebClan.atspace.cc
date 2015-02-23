package test;

import com.ezreb.htmlEditor.attribute.InlineStyle;
import com.ezreb.htmlEditor.css.CSSRule;
import com.ezreb.htmlEditor.css.Style;
import com.ezreb.htmlEditor.element.HTMLElement;
import com.ezreb.htmlEditor.element.HTMLTextNode;
import com.ezreb.htmlEditor.factory.ElementFactory;

public class test {
	public test() {
		// TODO Auto-generated constructor stub
	}
	public static void main(String[] args) {
		HTMLTextNode text = new HTMLTextNode("Testing");
		ElementFactory divF = new ElementFactory().setTagName("div").addClass("class1").addClass("class2");
		ElementFactory headerF = new ElementFactory().setTagName("h1");
		headerF.addContained(text);
		InlineStyle headerS = new InlineStyle();
		headerS.addStyleData(new CSSRule(Style.COLOR, "red"));
		headerS.addStyleData(new CSSRule(Style.TEXT_ALIGN, "center"));
		headerF.addAttribute(headerS);
		HTMLElement header = (HTMLElement) headerF.create();
		divF.addContained(header);
		HTMLElement div = (HTMLElement) divF.create();
		String html = div.generateString();
		System.out.println(html);
	}
}
