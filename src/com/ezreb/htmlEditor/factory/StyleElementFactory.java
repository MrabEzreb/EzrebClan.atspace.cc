package com.ezreb.htmlEditor.factory;

import com.ezreb.htmlEditor.css.CSSStyleElement;
import com.ezreb.htmlEditor.css.Style;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class StyleElementFactory implements Factory {

	public StyleElementFactory() {}
	private Style name;
	private String value;
	@Override
	public FactoryProduct create() {
		// TODO Auto-generated method stub
		return new CSSStyleElement(this.name, this.value);
	}
	/**
	 * @return the name
	 */
	public Style getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(Style name) {
		this.name = name;
	}
	/**
	 * @return the value
	 */
	public String getValue() {
		return value;
	}
	/**
	 * @param value the value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}

	public static void main(String[] args) {
		StyleElementFactory sef = new StyleElementFactory();
		sef.setValue("rgb(0,255,0)");
		sef.setName(Style.COLOR);
		CSSStyleElement cse = (CSSStyleElement) sef.create();
		System.out.println(cse.name.description);
	}
}
