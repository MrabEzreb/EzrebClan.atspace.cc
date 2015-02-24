package com.ezreb.htmlEditor.window.testing;

import java.awt.BorderLayout;

import javax.swing.JPanel;

public class TestWorkspace extends JPanel {

	/**
	 * Create the panel.
	 */
	public TestWorkspace() {
		setLayout(new BorderLayout());
		
		TestToolbox testToolbox = new TestToolbox();
		this.add(testToolbox, BorderLayout.WEST);

	}

}
