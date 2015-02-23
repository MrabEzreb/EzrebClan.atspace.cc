package com.ezreb.htmlEditor.window.testing;

import java.awt.Dimension;
import java.awt.FlowLayout;

import javax.swing.JPanel;

@SuppressWarnings("serial")
public class TestToolbox extends JPanel {
	private TestElement testElement;

	/**
	 * Create the panel.
	 */
	public TestToolbox() {
		setLayout(new FlowLayout(FlowLayout.LEFT, 5, 5));
		this.setPreferredSize(new Dimension(200, 10));
		testElement = new TestElement();
		add(testElement);

	}

	public TestElement getTestElement() {
		return testElement;
	}

}