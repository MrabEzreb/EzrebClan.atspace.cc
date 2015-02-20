package com.ezreb.htmlEditor.css;

public enum Styles {

	COLOR("color", "Sets the color of text"),
	OPACITY("opacity", "Sets the opacity level for an element"),
	BACKGROUND("background", "Sets all the background properties in one declaration"),
	BACKGROUND_ATTACHMENT("background-attachment", "Sets whether a background image is fixed or scrolls with the rest of the page"),
	BACKGROUND_COLOR("background-color", "Sets the background color of an element"),
	BACKGROUND_IMAGE("background-image", "Sets the background image for an element"),
	BACKGROUND_POSITION("background-position", "Sets the starting position of a background image"),
	BACKGROUND_REPEAT("background-repeat", "Sets how a background image will be repeated"),
	BACKGROUND_CLIP("background-clip", "Specifies the painting area of the background"),
	BACKGROUND_ORIGIN("background-origin", "Specifies the positioning area of the background images");
	
	private String name;
	private String value;
	public final String description;
	private Styles(String name, String description) {
		this.name = name;
		this.description = description;
	}
	/**
	 * @return the current value of the style
	 */
	public String getValue() {
		return value;
	}
	/**
	 * @param value the new value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}
	/**
	 * @return the name of the style
	 */
	public String getName() {
		return name;
	}
	/**
	 * @return the description of the style
	 */
	public String getDescription() {
		return description;
	}
	
}
