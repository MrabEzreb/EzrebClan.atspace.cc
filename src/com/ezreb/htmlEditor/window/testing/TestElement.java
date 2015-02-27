package com.ezreb.htmlEditor.window.testing;

import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Point;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionAdapter;
import java.awt.event.MouseMotionListener;
import java.io.IOException;
import java.util.Calendar;

import javax.imageio.ImageIO;

import com.ezreb.htmlEditor.config.Resolution;

@SuppressWarnings("serial")
public class TestElement extends TestCanvasPB {

	public static Dimension size;
	public TestElement() {
		this.setPreferredSize(new Dimension(50, 50));
		this.setSize(50, 50);
		System.out.println("created");
		System.out.println(this.getLocation());
		try {
			this.im = ImageIO.read(TestElement.class.getResourceAsStream("/com/ezreb/htmlEditor/window/testing/images/img.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		addMouseMotionListener(mml);
//		addMouseListener(new MouseAdapter() {
//			@Override
//			public void mousePressed(MouseEvent e) {
//				// TODO Auto-generated method stub
//				System.out.println("clcicked");
//				TestElement.this.whileMoving();
//				super.mousePressed(e);
//			}
//			@Override
//			public void mouseClicked(MouseEvent e) {
//				// TODO Auto-generated method stub
//				super.mouseClicked(e);
//			}
//			@Override
//			public void mouseReleased(MouseEvent e) {
//				// TODO Auto-generated methods stub
//				System.out.println("stopping");
//				TestElement.this.stopMoving();
//				super.mouseReleased(e);
//			}
//		});
	}
	public TestElement(TestCanvasPB creator) {
		this();
		this.creator = creator;
		addMouseListener(ml);
		System.out.println("test");
	}
	public Image im;
	public boolean moving = false;
	private TestCanvasPB creator;
	private MouseListener ml = new MouseAdapter() {
		@Override
		public void mouseReleased(MouseEvent e) {
			// TODO Auto-generated method stub
			super.mouseReleased(e);
			TestElement.this.creator.setVisible(true);
			TestElement.this.removeMouseListener(ml);
			System.out.println("clicked");
		}
	};
	MouseMotionListener mml = new MouseMotionAdapter() {
		@Override
		public void mouseDragged(MouseEvent e) {
			// TODO Auto-generated method stub
			super.mouseDragged(e);
			Point e2 = TestElement.this.getParent().getMousePosition();
			TestElement.this.setLocation((int)e2.getX()-25, (int)e2.getY()-25);
		}
	};
	@Override
	public void paint(Graphics g) {
		size = Resolution.resize(new Dimension(59, 59), TestWindow.size);
		this.setSize(size);
		this.setPreferredSize(size);
		((Graphics2D) this.getGraphics()).drawImage(im, 0, 0, size.width, size.height, this);
	}
	public synchronized void stopMoving() {
		System.out.println(Calendar.getInstance().get(Calendar.MILLISECOND));
		this.moving = false;
		System.out.println("stopped");
		this.notify();
		System.out.println(Calendar.getInstance().get(Calendar.MILLISECOND));
	}
	public synchronized void print() {
		while(true) {
			try {
				this.wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(this.moving);
			this.notify();
		}
	}
	public synchronized void whileMoving() {
		this.moving = true;
		while(this.moving == true) {
			Point p2 = this.getParent().getParent().getMousePosition();
			System.out.println(Calendar.getInstance().get(Calendar.MILLISECOND));
			try {
				this.wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(Calendar.getInstance().get(Calendar.MILLISECOND));
			System.out.println("test2");
			Point p = this.getParent().getParent().getMousePosition();
			if(p != null) {
				if(p2.equals(p) == false) {
					int x = p.x-25;
					int y = p.y-25;
					this.setLocation(x, y);
				}
				this.getParent().paintComponents(getParent().getGraphics());
			} else {
				this.moving = false;
			}
		}
	}
	public static void main(String[] args) {
		final TestElement te = new TestElement();
		Thread test = new Thread(new Runnable() {
			
			@Override
			public void run() {
				te.print();
			}
		});
		Thread tested = new Thread(new Runnable() {
			
			@Override
			public void run() {
				te.whileMoving();
			}
		});
		test.start();
		tested.start();
	}
}
