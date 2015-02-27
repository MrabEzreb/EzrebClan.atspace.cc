package com.ezreb.htmlEditor.window.testing;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Graphics;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

import com.ezreb.htmlEditor.config.Resolution;

import java.awt.Component;
import java.awt.event.WindowEvent;
import java.awt.event.WindowStateListener;

@SuppressWarnings("serial")
public class TestWindow extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					TestWindow frame = new TestWindow();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	private JPanel pane;
	public static Dimension size;
	/**
	 * Create the frame.
	 */
	public TestWindow() {
		getContentPane().setLayout(null);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		setSize(new Dimension(800, 450));
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setBackground(Color.BLACK);
		setContentPane(contentPane);
		pane = new JPanel();
		size = this.getSize();
		contentPane.setLayout(null);
		pane.setSize(Resolution.resize(new Dimension(1600, 900), size));
		pane.setLocation((this.getSize().width/2)-(pane.getSize().width/2), 0);
		size = this.getSize();
		contentPane.add(pane);
		pane.setLayout(new BorderLayout(0, 0));
		
		TestWorkspace testWorkspace = new TestWorkspace();
		pane.add(testWorkspace);
		addWindowStateListener(new WindowStateListener() {
			
			@Override
			public void windowStateChanged(WindowEvent e) {
				if(e.getID() == e.)
			}
		});
	}
	
	
	@Override
	public void paint(Graphics g) {
		// TODO Auto-generated method stub
		super.paint(g);
		size = this.getSize();
		pane.setSize(Resolution.resize(new Dimension(1600, 900), size));
		pane.setLocation((this.getSize().width/2)-(pane.getSize().width/2), 0);
		size = this.getSize();
	}
}
