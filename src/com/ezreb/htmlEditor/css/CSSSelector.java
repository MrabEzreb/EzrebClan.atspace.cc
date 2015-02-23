package com.ezreb.htmlEditor.css;

import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSSelector implements FactoryProduct {

	
	public enum SelectorType {
		
		TAG(""),
		ID("#"),
		CLASS("."),
		INLINE();
		
		private String syntax = "";
		private SelectorType(String syntax) {
			this.syntax = syntax;
		}
		private SelectorType() {}
		public String getSyntax() {
			return this.syntax;
		}
		
	}
	
	private SelectorType type;
	private String name;
	
	public CSSSelector(SelectorType type, String name) {
		this.type = type;
		this.name = name;
	}
	public CSSSelector(SelectorType type) {
		this.type = type;
	}
	
	public String generateString() {
		if(this.type == SelectorType.INLINE) {
			return " ";
		} else {
			String retVal = "";
			retVal = this.type.getSyntax()+this.name;
			return retVal;
		}
	}

	@Override
	public Factory getParentFactory() {
		// TODO Auto-generated method stub
		return null;
	}

}
