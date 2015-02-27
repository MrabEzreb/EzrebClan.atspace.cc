package com.ezreb.htmlEditor.window.testing;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Graphics;

import javax.swing.JPanel;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;

import com.ezreb.htmlEditor.config.Resolution;
import com.sun.java.swing.plaf.motif.MotifBorders.FrameBorder;

@SuppressWarnings("serial")
public class TestToolbox extends JPanel {
	private TestNewElement testElement;

	public static Dimension size;
	/**
	 * Create the panel.
	 */
	public TestToolbox() {
		setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
		this.setPreferredSize(new Dimension(200, 10));
		testElement = new TestNewElement();
		add(testElement);
		setOpaque(false);
		setBorder(new LineBorder(new Color(63, 190, 63)));

	}

	public TestNewElement getTestElement() {
		return testElement;
	}
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		size = Resolution.resize(new Dimension(235, 863), TestWindow.size);
		this.setSize(size);
		Component[] c = this.getComponents();
		for (Component component : c) {
			component.paint(component.getGraphics());
		}
	}

}