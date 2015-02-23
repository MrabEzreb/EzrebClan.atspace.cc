package com.ezreb.htmlEditor.element;

import com.ezreb.htmlEditor.attribute.HTMLAttribute;
import com.ezreb.htmlEditor.factory.ElementFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class HTMLElement implements FactoryProduct {

	public HTMLElement(String tagName, String[] classList,
			HTMLAttribute[] attributeList, HTMLElement[] contained) {
		this.tagName = tagName;
		this.classList = classList;
		this.attributeList = attributeList;
		this.contained = contained;
	}
	public HTMLElement() {}
	public String tagName;
	public String className = "";
	public String[] classList;
	public String attributes = "";
	public HTMLAttribute[] attributeList;
	public HTMLElement[] contained;
	public String generateString() {
		String retVal;
		String[] classes = classList;
		String className2 = "";
		if(classes.length == 1 && classes[0].equals("")) {this.className = "";} else if(classes.length == 0) {this.className = "";} else {
			for (int i = 0; i < classes.length; i++) {
				if(i == 0) {
					className2 = classes[i];
				} else {
					className2 = className2+" "+classes[i];
				}
			}
			this.className = " class=\""+className2+"\"";
		}
		HTMLAttribute[] attris = this.attributeList;
		String attribs = "";
		if(attris.length == 0) {this.attributes = "";} else {
			for (HTMLAttribute htmlAttribute : attris) {
				attribs = attribs+" "+htmlAttribute.generateString();
			}
			this.attributes = attribs;
		}
		HTMLElement[] cont = contained;
		String contString = "";
		for (HTMLElement htmlElement : cont) {
			contString = contString+htmlElement.generateString();
		}
		retVal = "<"+this.tagName+this.className+this.attributes+">"+contString+"</"+this.tagName+">";
		return retVal;
	}
	@Override
	public Factory getParentFactory() {
		// TODO Auto-generated method stub
		return new ElementFactory();
	}
}
