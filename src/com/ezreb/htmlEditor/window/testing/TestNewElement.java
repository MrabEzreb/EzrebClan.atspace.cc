package com.ezreb.htmlEditor.window.testing;

import java.awt.AWTException;
import java.awt.Button;
import java.awt.Canvas;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.MouseInfo;
import java.awt.Point;
import java.awt.PointerInfo;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.ezreb.htmlEditor.config.Resolution;

public class TestNewElement extends TestCanvasPB {

	public static Dimension size;
	@Override
	public void update(Graphics arg0) {
		// TODO Auto-generated method stub
		super.update(arg0);
	}
	public TestNewElement() {
		this.setPreferredSize(new Dimension(50, 50));
		try {
			this.im = ImageIO.read(TestElement.class.getResourceAsStream("/com/ezreb/htmlEditor/window/testing/images/img.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		addMouseListener(new MouseAdapter() {
			@Override
			public void mousePressed(MouseEvent e) {
				// TODO Auto-generated method stub
				super.mousePressed(e);
				TestElement te = new TestElement(TestNewElement.this);
				Point thisLoc = TestNewElement.this.getLocation();
				//thisLoc.translate(-TestNewElement.this.getParent().getSize().width, 0);
				System.out.println(TestNewElement.this.getLocation());
				System.out.println(thisLoc);
				te.setLocation(thisLoc);
				((TestWorkspace)TestNewElement.this.getParent().getParent()).testEditor.add(te);
				System.out.println(te.getLocation());
				System.out.println(te.getParent() instanceof TestEditor);
				System.out.println(te.isVisible());
				TestNewElement.this.setVisible(false);
				System.out.println("clicked");
				Robot r = null;
				try {
					r = new Robot();
				} catch (AWTException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				r.mouseMove(((int)te.getLocationOnScreen().getX()+25), ((int)te.getLocationOnScreen().getY()+25));
				r.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);
				r.mousePress(InputEvent.BUTTON1_DOWN_MASK);
			}
		});
	}
	public Image im;
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		size = Resolution.resize(new Dimension(59, 59), TestWindow.size);
		this.setSize(size);
		this.getGraphics().drawImage(im, 0, 0, size.width, size.height, this);
	}
}
