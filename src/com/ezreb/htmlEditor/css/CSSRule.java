package com.ezreb.htmlEditor.css;

import com.ezreb.htmlEditor.factory.CSSRuleFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSRule implements FactoryProduct {

	public CSSRule(Style name, String value) {
		this.name = name;
		this.value = value;
	}
	public Style name;
	public String value;
	public String generateString() {
		return this.name.getName()+": "+this.value+";";
	}
	@Override
	public Factory getParentFactory() {
		// TODO Auto-generated method stub
		return new CSSRuleFactory();
	}

}
