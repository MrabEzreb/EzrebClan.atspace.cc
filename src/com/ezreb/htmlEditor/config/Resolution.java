package com.ezreb.htmlEditor.config;

import java.awt.Dimension;
import java.awt.GraphicsEnvironment;
import java.awt.geom.Dimension2D;

public class Resolution {

	public static Dimension originalRes = new Dimension(1600, 900);
	public static double orx = 1600;
	public static double ory = 900;
	public static Dimension resize(Dimension original, Dimension different) {
		Dimension ratio = new Dimension(((int) Math.floor(different.getWidth()/originalRes.getWidth())), ((int) Math.floor(different.getHeight()/originalRes.getHeight())));
		double ox = original.getWidth();
		double oy = original.getHeight();
		double dx = different.getWidth();
		double dy = different.getHeight();
		double r2x = ox/oy;
		double ry = dy/ory;
		double rVy = oy*ry;
		double rVx = rVy*r2x;
		Dimension retVal = new Dimension(((int) Math.floor(rVx)), ((int) Math.floor(rVy)));
		return retVal;
	}
	public static void main(String[] args) {
		Dimension square = new Dimension(1130, 863);
		Dimension one = new Dimension(1366, 768);
		Dimension two = new Dimension(1680, 1050);
		Dimension three = new Dimension(1280, 720);
		Dimension four = new Dimension(1920, 1080);
		System.out.println(resize(square, one));
		System.out.println(resize(square, two));
		System.out.println(resize(square, three));
		System.out.println(resize(square, four));
		//square = new Dimension(160, 90);
		System.out.println(resize(square, one));
		System.out.println(resize(square, two));
		System.out.println(resize(square, three));
		System.out.println(resize(square, four));
		System.out.println(GraphicsEnvironment.getLocalGraphicsEnvironment().getDefaultScreenDevice().getDefaultConfiguration().getBounds());
		System.out.println(resize(square, one));
	}
}
