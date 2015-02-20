package com.ezreb.htmlEditor.attribute;

import com.ezreb.htmlEditor.factory.AttributeFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class HTMLAttribute implements FactoryProduct {
	
	public HTMLAttribute(String name, String value) {
		this.name = name;
		this.value = value;
	}
	public String name;
	public String value;
	@Override
	public Factory getParentFactory() {
		return new AttributeFactory();
	}
}
