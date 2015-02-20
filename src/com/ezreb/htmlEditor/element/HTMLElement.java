package com.ezreb.htmlEditor.element;

import com.ezreb.htmlEditor.attribute.HTMLAttribute;
import com.ezreb.htmlEditor.factory.ElementFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class HTMLElement implements FactoryProduct {

	
	public String className;
	public String[] classList;
	public HTMLAttribute[] attributeList;
	public HTMLElement[] contained;
	@Override
	public Factory getParentFactory() {
		// TODO Auto-generated method stub
		return new ElementFactory();
	}
}
