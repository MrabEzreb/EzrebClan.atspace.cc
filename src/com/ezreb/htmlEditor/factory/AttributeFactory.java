package com.ezreb.htmlEditor.factory;

import com.ezreb.htmlEditor.attribute.HTMLAttribute;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class AttributeFactory implements Factory {

	public AttributeFactory() {}
	private String name;
	private String value;
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
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
	/**
	 * @return a new HTMLAttribute using the given values.
	 */
	public FactoryProduct create() {
		return new HTMLAttribute(this.name, this.value);
	}
}
