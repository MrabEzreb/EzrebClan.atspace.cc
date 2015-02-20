package test;

public enum Day {

	//Enum values:
	SUNDAY ("Good"),
	MONDAY ("Bad"),
	SATURDAY ("Amazing");
	
	//Normal class stuff:
	public String mood;
	private Day(String mood) {
		this.mood = mood;
	}
	public void printMood() {
		System.out.println("On "+this+" I feel: ");
		System.out.println(this.mood);
	}
	
	//Main method:
	public static void main(String[] args) {
		for (Day day : Day.values()) {
			day.printMood();
		}
	}
}
