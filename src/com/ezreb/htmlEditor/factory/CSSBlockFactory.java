package com.ezreb.htmlEditor.factory;

import com.ezreb.htmlEditor.css.CSSBlock;
import com.ezreb.htmlEditor.css.CSSRule;
import com.ezreb.htmlEditor.css.CSSSelector;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSBlockFactory implements Factory {

	public CSSBlockFactory(CSSSelector selector, CSSRule[] rules) {
		this.selector = selector;
		this.rules = rules;
	}
	public CSSBlockFactory() {}
	public CSSSelector selector = null;
	public CSSRule[] rules = new CSSRule[0];
	@Override
	public FactoryProduct create() {
		return new CSSBlock(rules, selector);
	}

}
