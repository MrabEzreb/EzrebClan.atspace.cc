package com.ezreb.htmlEditor.window.testing;

import java.awt.Canvas;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;

import javax.imageio.ImageIO;

@SuppressWarnings("serial")
public class TestElement extends Canvas {

	public TestElement() {
		this.setPreferredSize(new Dimension(50, 50));
		try {
			this.im = ImageIO.read(TestElement.class.getResourceAsStream("/com/ezreb/htmlEditor/window/testing/images/img.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				// TODO Auto-generated method stub
				System.out.println("clcicked");
				super.mouseReleased(e);
			}
			@Override
			public void mouseReleased(MouseEvent e) {
				// TODO Auto-generated method stub
				super.mouseReleased(e);
			}
		});
	}
	public Image im;
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		((Graphics2D) this.getGraphics()).drawImage(im, 0, 0, 50, 50, this);
	}
}
