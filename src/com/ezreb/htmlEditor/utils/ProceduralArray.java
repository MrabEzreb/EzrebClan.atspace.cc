package com.ezreb.htmlEditor.utils;

public class ProceduralArray {

	public ProceduralArray(Class<?> arrayType) {
		this.arrayClass = arrayType;
	}
	private Class<?> arrayClass;
	private Object[] array = new Object[0];
	public void add(Object addend) {
		if(addend.getClass() == this.arrayClass) {
			Object[] newArray = new Object[array.length+1];
			for (int i = 0; i < this.array.length; i++) {
				newArray[i] = array[i];
			}
			newArray[array.length] = addend;
			this.array = newArray;
		}
	}
	public void set(Object value, int index) {
		if(value.getClass() == this.arrayClass) {
			this.array[index] = value;
		}
	}
	public Object[] getArray() {
		return this.array;
	}
}
