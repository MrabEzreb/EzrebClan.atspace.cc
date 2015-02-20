package com.ezreb.htmlEditor.factory;

import com.ezreb.htmlEditor.element.HTMLElement;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class ElementFactory implements Factory {

	public ElementFactory() {}
	@Override
	public FactoryProduct create() {
		// TODO Auto-generated method stub
		return new HTMLElement();
	}

}
