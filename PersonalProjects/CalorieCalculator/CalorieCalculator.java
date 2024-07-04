import java.util.Scanner;

public class CalorieCalculator {

    // Constants for activity multipliers. This improves readability and maintainability.
    private static final double SEDENTARY_MULTIPLIER = 1.2;
    private static final double LIGHTLY_ACTIVE_MULTIPLIER = 1.375;
    private static final double MODERATELY_ACTIVE_MULTIPLIER = 1.55;
    private static final double VERY_ACTIVE_MULTIPLIER = 1.725;
    private static final double EXTRA_ACTIVE_MULTIPLIER = 1.9;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input gathering (same as before, but with a minor refactor for conciseness)
        System.out.println("Welcome to the Calorie Calculator!");
        System.out.println("---------------------------------");
        System.out.print("Age: ");
        int age = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        System.out.print("Gender (M/F): ");
        String gender = scanner.nextLine();

        System.out.print("Height (cm): ");
        double height = scanner.nextDouble();

        System.out.print("Weight (kg): ");
        double weight = scanner.nextDouble();

        System.out.println("\nActivity Level:");
        System.out.println("1. Sedentary");
        System.out.println("2. Lightly Active");
        System.out.println("3. Moderately Active");
        System.out.println("4. Very Active");
        System.out.println("5. Extra Active");
        System.out.print("Enter the corresponding number: ");
        int activityChoice = scanner.nextInt();
        scanner.close();

        // BMR calculation (refactored into a separate method)
        double bmr = calculateBMR(gender, weight, height, age);

        // Calorie needs calculation (using a method and constants)
        double calorieNeeds = calculateCalorieNeeds(bmr, activityChoice);

        // Display results (unchanged)
        System.out.println("\nYour Results:");
        System.out.println("-------------");
        System.out.printf("Basal Metabolic Rate (BMR): %.0f calories per day\n", bmr);
        System.out.printf("Estimated Daily Calorie Needs: %.0f calories per day\n", calorieNeeds);
    }

    // Separate method for BMR calculation
    private static double calculateBMR(String gender, double weight, double height, int age) {
        if (gender.equalsIgnoreCase("M")) {
            return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender.equalsIgnoreCase("F")) {
            return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        } else {
            throw new IllegalArgumentException("Invalid gender input. Please enter M or F.");
        }
    }

    // Separate method for calorie needs calculation
    private static double calculateCalorieNeeds(double bmr, int activityChoice) {
        switch (activityChoice) {
            case 1: return bmr * SEDENTARY_MULTIPLIER;
            case 2: return bmr * LIGHTLY_ACTIVE_MULTIPLIER;
            case 3: return bmr * MODERATELY_ACTIVE_MULTIPLIER;
            case 4: return bmr * VERY_ACTIVE_MULTIPLIER;
            case 5: return bmr * EXTRA_ACTIVE_MULTIPLIER;
            default: throw new IllegalArgumentException("Invalid activity level choice.");
        }
    }
}