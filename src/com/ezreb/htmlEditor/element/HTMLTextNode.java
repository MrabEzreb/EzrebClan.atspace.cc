package com.ezreb.htmlEditor.element;

public class HTMLTextNode extends HTMLElement {

	
	public HTMLTextNode(String text) {
		this.text = text;
	}
	public String text;
	@Override
	public String generateString() {
		// TODO Auto-generated method stub
		return this.text;
	}
}
