package com.ezreb.htmlEditor.css;

import com.ezreb.htmlEditor.factory.StyleElementFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSStyleElement implements FactoryProduct {

	public CSSStyleElement(Style name, String value) {
		this.name = name;
		this.value = value;
	}
	public Style name;
	public String value;
	@Override
	public Factory getParentFactory() {
		// TODO Auto-generated method stub
		return new StyleElementFactory();
	}

}
