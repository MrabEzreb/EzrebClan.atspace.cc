package com.ezreb.htmlEditor.window.testing;

import java.awt.Canvas;
import java.awt.Point;

@SuppressWarnings("serial")
public class TestCanvasPB extends Canvas {

	public void setCenterLocation(Point p) {
		this.setLocation((int)(Math.floor(p.getX()-(this.getSize().getWidth()/2))), (int)(Math.floor(p.getY()-(this.getSize().getHeight()/2))));
	}
}
