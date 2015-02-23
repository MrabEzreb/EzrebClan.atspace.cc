package com.ezreb.htmlEditor.css;

import com.ezreb.htmlEditor.factory.CSSBlockFactory;
import com.ezreb.htmlEditor.interfaceTypes.Factory;
import com.ezreb.htmlEditor.interfaceTypes.FactoryProduct;

public class CSSBlock implements FactoryProduct {

	
	public CSSBlock(CSSRule[] rules, CSSSelector selector) {
		this.rules = rules;
		this.selector = selector;
	}
	public CSSBlock(CSSSelector selector) {
		this.selector = selector;
	}
	private CSSRule[] rules = new CSSRule[0];
	private CSSSelector selector;
	public CSSBlock addRule(CSSRule rule) {
		CSSRule[] rules2 = new CSSRule[this.rules.length+1];
		for (int i = 0; i < rules.length; i++) {
			rules2[i] = rules[i];
		}
		rules2[rules.length] = rule;
		this.rules = rules2;
		return this;
	}
	public CSSBlock resetRules() {
		this.rules = new CSSRule[0];
		return this;
	}
	public String generateString() {
		String retVal = "";
		String selectorString = this.selector.generateString();
		String firstLine = "";
		String lastLine = "";
		String seperator;
		String beginner = "";
		if(selectorString.equals(" ")) {
			firstLine = "";
			seperator = " ";
			lastLine = "";
			beginner = "";
		} else {
			firstLine = selectorString+" {\n";
			seperator = "\n";
			lastLine = "\n}";
			beginner = "\t";
		}
		String rules2 = "";
		for (int i = 0; i < this.rules.length; i++) {
			CSSRule cssRule = rules[i];
			if(i == rules.length-1) {
				rules2 = rules2+beginner+cssRule.generateString();
			} else {
				rules2 = rules2+beginner+cssRule.generateString()+seperator;
			}
		}
		retVal = firstLine+rules2+lastLine;
		return retVal;
	}
	@Override
	public Factory getParentFactory() {
		return new CSSBlockFactory();
	}

}
