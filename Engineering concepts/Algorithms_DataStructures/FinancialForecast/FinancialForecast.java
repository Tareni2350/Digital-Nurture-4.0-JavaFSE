// FinancialForecast.java
public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double initialAmount, double growthRate, int periods) {
        if (periods == 0) {
            return initialAmount;
        }
        return predictFutureValue(initialAmount * (1 + growthRate), growthRate, periods - 1);
    }

    public static void main(String[] args) {
        double initialInvestment = 10000.0;
        double annualGrowthRate = 0.10;  // 10% growth
        int years = 5;

        double futureValue = predictFutureValue(initialInvestment, annualGrowthRate, years);

        System.out.printf("Future value after %d years = ₹%.2f\n", years, futureValue);
    }
}
