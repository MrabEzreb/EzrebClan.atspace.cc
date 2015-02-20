package com.ezreb.htmlEditor.css;

import com.ezreb.htmlEditor.factory.CSSBlockFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSBlock implements FactoryProduct {

	
	
	@Override
	public Factory getParentFactory() {
		return new CSSBlockFactory();
	}

}
