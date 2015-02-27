package com.ezreb.htmlEditor.window.testing;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Graphics;

import javax.swing.JPanel;

import com.ezreb.htmlEditor.config.Resolution;

@SuppressWarnings("serial")
public class TestWorkspace extends JPanel {

	public Dimension size;
	public TestToolbox testToolbox;
	public TestEditor testEditor;
	/**
	 * Create the panel.
	 */
	public TestWorkspace() {
		setLayout(new BorderLayout());
		
		testToolbox = new TestToolbox();
		this.add(testToolbox, BorderLayout.WEST);
		
		testEditor = new TestEditor();
		this.add(testEditor, BorderLayout.CENTER);

	}
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		Component[] c = this.getComponents();
		for (Component component : c) {
			component.paint(component.getGraphics());
		}
	}

}
