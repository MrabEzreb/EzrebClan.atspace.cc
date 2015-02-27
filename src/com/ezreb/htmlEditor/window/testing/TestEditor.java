package com.ezreb.htmlEditor.window.testing;

import javax.swing.JPanel;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Graphics;

import javax.swing.border.LineBorder;

import com.ezreb.htmlEditor.config.Resolution;

public class TestEditor extends JPanel {
	public Dimension size;
	public TestEditor() {
		setOpaque(false);
		setBorder(new LineBorder(new Color(0, 0, 0)));
		setBackground(new Color(0, 0, 0, 0));
		setLayout(null);
	}
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		size = Resolution.resize(new Dimension(1130, 863), TestWindow.size);
		this.setSize(size);
		this.setPreferredSize(size);
		this.setLocation(Resolution.resize(new Dimension(235, 863), TestWindow.size).width, 0);
	}

}
