package com.ezreb.htmlEditor.window.testing;

import java.awt.MouseInfo;
import java.awt.Point;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

@SuppressWarnings("serial")
public class TestFloatingElement extends TestElement {

	public TestFloatingElement() {
		super();
		Point e = MouseInfo.getPointerInfo().getLocation();
		this.setLocation((int) e.getX()-25, (int) e.getY()-25);
		this.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				// TODO Auto-generated method stub
				super.mouseClicked(e);
				TestFloatingElement.this.setLocation(e.getX()-25, e.getY()-25);
			}
		});
	}
}
