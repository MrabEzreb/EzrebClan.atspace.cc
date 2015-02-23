package com.ezreb.htmlEditor.factory;

import com.ezreb.htmlEditor.attribute.HTMLAttribute;
import com.ezreb.htmlEditor.element.HTMLElement;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class ElementFactory implements Factory {

	public ElementFactory() {}
	public String tagName = "";
	public String[] classList = new String[0];
	public HTMLAttribute[] attributeList = new HTMLAttribute[0];
	public HTMLElement[] contained = new HTMLElement[0];
	
	/**
	 * @return the tagName
	 */
	public String getTagName() {
		return tagName;
	}

	/**
	 * @param tagName the tagName to set
	 * @return this
	 */
	public ElementFactory setTagName(String tagName) {
		this.tagName = tagName;
		return this;
	}

	/**
	 * @return the classList
	 */
	public String[] getClassList() {
		return classList;
	}

	public ElementFactory addClass(String classToAdd) {
		if(this.classList.length == 0) {
			this.classList = new String[] {classToAdd};
		} else {
			String[] classes = new String[this.classList.length+1];
			for (int i = 0; i < classList.length; i++) {
				classes[i] = classList[i];
			}
			classes[classList.length] = classToAdd;
			this.classList = classes;
		}
		return this;
	}

	/**
	 * @return the attributeList
	 */
	public HTMLAttribute[] getAttributeList() {
		return attributeList;
	}

	public ElementFactory addAttribute(HTMLAttribute att) {
		HTMLAttribute[] attrs1 = new HTMLAttribute[this.attributeList.length+1];
		for (int i = 0; i < this.attributeList.length; i++) {
			attrs1[i] = this.attributeList[i];
		}
		attrs1[this.attributeList.length] = att;
		this.attributeList = attrs1;
		return this;
	}

	/**
	 * @return the contained
	 */
	public HTMLElement[] getContained() {
		return contained;
	}

	public ElementFactory addContained(HTMLElement elm) {
		HTMLElement[] elms1 = new HTMLElement[this.contained.length+1];
		for (int i = 0; i < this.contained.length; i++) {
			elms1[i] = this.contained[i];
		}
		elms1[this.contained.length] = elm;
		this.contained = elms1;
		return this;
	}

	@Override
	public FactoryProduct create() {
		// TODO Auto-generated method stub
		return new HTMLElement(tagName, classList, attributeList, contained);
	}

}
