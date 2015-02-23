package com.ezreb.htmlEditor.attribute;

import com.ezreb.htmlEditor.css.CSSBlock;
import com.ezreb.htmlEditor.css.CSSRule;
import com.ezreb.htmlEditor.css.CSSSelector;
import com.ezreb.htmlEditor.css.CSSSelector.SelectorType;

public class InlineStyle extends HTMLAttribute {

	public InlineStyle() {
		super("style", "");
		this.styleData = new CSSBlock(new CSSSelector(SelectorType.INLINE));
	}
	private CSSBlock styleData;
	public InlineStyle addStyleData(CSSRule rule) {
		this.styleData.addRule(rule);
		return this;
	}
	public InlineStyle resetStyleData() {
		this.styleData.resetRules();
		return this;
	}
	public String generateString() {
		String retVal = "";
		retVal = "style=\""+this.styleData.generateString()+"\"";
		return retVal;
	}
}
